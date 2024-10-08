import { useCart } from "shared/context/CartContext";
import AdditionalCheckoutInfo from "./AdditionCheckoutInfo";
import BillingInfo from "./BillingInfo";
import "./Checkout.css";
import CheckoutSummary from "./CheckoutSummary";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "shared/context/AuthContext";
import { useContext, useEffect } from "react";
import { NotificationContext } from "shared/context/NotificationContext";
import Loading from "shared/components/Loading";

const CheckoutPage = () => {
    const { isAuthenticated, user, loading: userLoading } = useAuth();
    const { showNotification } = useContext(NotificationContext);
    const location = useLocation();
    const { cartTotal } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userLoading) {
            if (!isAuthenticated  || user.privilege !== "buyer") {
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

    const handleSubmit = () => {
        navigate("/checkout/payment");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mt-3 mb-5 pb-5">
                        <h3 className="billing-heading">Billing Information</h3>
                        <BillingInfo />
                        <AdditionalCheckoutInfo />
                    </div>
                </div>
                <div className="col-lg-4">
                    <CheckoutSummary
                        totalPrice={cartTotal}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
