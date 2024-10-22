import React, { useContext, useEffect, useState } from "react";
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { apiClient } from "shared/api/apiClient";
import config from "config";
import { useCart } from "shared/context/CartContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ButtonLoading from "shared/components/ButtonLoading";
import { useCustomerOrder } from "features/Customer/context/OrderContext";
import { NotificationContext } from "shared/context/NotificationContext";
import { useAuth } from "shared/context/AuthContext";
import Loading from "shared/components/Loading";

const CheckoutForm = ({ clientSecret, carts }) => {
    const [error, setError] = useState(""); // State to hold error messages
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { resetCart } = useCart();
    const { fetchOrders } = useCustomerOrder();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setError(""); // Reset error on new submission

        try {
            const { error: stripeError, paymentIntent } =
                await stripe.confirmPayment({
                    elements,
                    confirmParams: {
                        return_url: "http://localhost:3000/checkout_success", // Replace with your success URL
                    },
                    redirect: "if_required",
                });

            if (stripeError) {
                setError(`Payment failed: ${stripeError.message}`); // Show Stripe error to user
                setLoading(false);
                return;
            }

            // Call /finalize with carts and Stripe payment object using Axios
            try {
                const response = await apiClient.post(
                    `${config.API_BASE_URL}/product/payment/finalize`,
                    { carts, stripeId: paymentIntent }
                );
                console.log(response.data.message);
                navigate("/checkout/success");
                fetchOrders();
                resetCart();
            } catch (finalizeError) {
                setError("Error finalizing payment, please try again."); // Show backend error to user
                console.error("Error finalizing payment:", finalizeError);
            }
        } catch (error) {
            setError("An unexpected error occurred. Please try again."); // General catch-all error
            console.error("Error during payment process:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center my-3">
            <form onSubmit={handleSubmit} className="card shadow">
                <div className="card-body">
                    {error && (
                        <div className="alert alert-danger mt-3">{error}</div>
                    )}

                    {clientSecret ? <PaymentElement /> : <Loading />}

                    <button
                        className="btn btn-primary text-white w-100 mt-3 fw-semibold"
                        disabled={!stripe || loading || !clientSecret}
                        type="submit">
                        {loading ? (
                            <>
                                Processing... <ButtonLoading />
                            </>
                        ) : (
                            "Pay"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

// Wrapper component to fetch clientSecret and pass it to Elements
const CheckoutWrapper = ({ stripePromise }) => {
    const { cartItems, loading: cartLoading } = useCart();
    const [clientSecret, setClientSecret] = useState("");
    const [carts, setCarts] = useState([]);
    const { isAuthenticated, user, loading: userLoading } = useAuth();
    const { showNotification } = useContext(NotificationContext);
    const location = useLocation();

    // Fetch the clientSecret from /initialize when cartItems are available
    useEffect(() => {
        const initializePayment = async () => {
            if (cartItems.length === 0) return; // Ensure carts is not empty

            try {
                const response = await apiClient.post(
                    `${config.API_BASE_URL}/product/payment/initialize`,
                    { carts: cartItems }
                );
                if (response.data?.data) {
                    setClientSecret(response.data.data); // Set the client_secret from response
                    setCarts(cartItems); // Store carts for /finalize
                }
            } catch (error) {
                console.error("Error initializing payment:", error);
            }
        };

        if (!cartLoading && cartItems.length > 0) {
            initializePayment();
        }
    }, [cartItems, cartLoading]);

    useEffect(() => {
        if (!userLoading) {
            if (!isAuthenticated || user.privilege !== "buyer") {
                showNotification(
                    "You are not authorized to access this page",
                    "danger"
                );
            }
        }
    }, [isAuthenticated, user, showNotification, userLoading]);

    if (userLoading) {
        return <Loading />;
    }

    if (!isAuthenticated || user.privilege !== "buyer") {
        return (
            <Navigate
                to={`/login/customer?redirect_uri=${location.pathname}`}
            />
        );
    }

    const options = { clientSecret };

    return clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret} carts={carts} />
        </Elements>
    ) : (
        <Loading />
    );
};

export default CheckoutWrapper;
