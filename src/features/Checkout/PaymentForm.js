// // PaymentForm.js
// import React, { useEffect, useState } from "react";
// import { CardElement, useStripe, useElements,PaymentElement } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { useCart } from "shared/context/CartContext";
// import { apiClient } from "shared/api/apiClient";
// import config from "config";

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentStatus, setPaymentStatus] = useState("");
//     const { cartItems } = useCart();
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         setCart(cartItems);
//     }, [cartItems]);

//     // Initialize Payment by sending cart to backend
//     const initializePayment = async (cart) => {
//         try {
//             const response = await apiClient.post(`${config.API_BASE_URL}/product/payment/initialize`, {
//                 carts: cart,
//             });
//             const  clientSecret  = response.data.data; // Retrieve the client secret from the backend
//             return clientSecret;
//         } catch (error) {
//             console.error("Error initializing payment:", error);
//             return null;
//         }
//     };

//     // Finalize Payment by sending payment details to backend
//     const finalizePayment = async (cart, paymentIntent) => {
//         try {
//             const response = await apiClient.post(`${config.API_BASE_URL}/product/payment/finalize`, {
//                 carts: cart,
//                 stripeId: paymentIntent, // Send the Stripe PaymentIntent object to the backend
//             });
//             console.log("Payment finalized successfully:", response.data);
//         } catch (error) {
//             console.error("Error finalizing payment:", error);
//         }
//     };

//     // Handle the payment submission
//     const handlePayment = async (event) => {
//         event.preventDefault();

//         // Step 1: Initialize payment and get client secret from backend
//         const clientSecret = await initializePayment(cart);

//         if (!clientSecret) {
//             setPaymentStatus("Failed to get client secret.");
//             return;
//         }

//         // Step 2: Confirm the payment with Striaxiospe using client secret
//         const cardElement = elements.getElement(CardElement);
//         const result = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: cardElement,
//             },
//         });

//         if (result.error) {
//             // Display error message if payment fails
//             setPaymentStatus(`Payment failed: ${result.error.message}`);
//         } else if (result.paymentIntent.status === "succeeded") {
//             // Step 3: Finalize payment by sending cart and paymentIntent to the backend
//             await finalizePayment(cart, result.paymentIntent);
//             setPaymentStatus("Payment successful!");
//         }
//     };

//     return (
//         <form onSubmit={handlePayment}>
//             {/* <CardElement /> */}
//             <PaymentElement/>
//             <button type="submit" disabled={!stripe}>
//                 Pay
//             </button>
//             {paymentStatus && <p>{paymentStatus}</p>}
//         </form>
//     );
// };

// export default PaymentForm;

import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import { useCart } from "shared/context/CartContext";
import { apiClient } from "shared/api/apiClient";
import config from "config";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentStatus, setPaymentStatus] = useState("");
    const { cartItems } = useCart();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cartItems);
    }, [cartItems]);

    // Initialize Payment by sending cart to backend
    const initializePayment = async (cart) => {
        try {
            const response = await apiClient.post(
                `${config.API_BASE_URL}/product/payment/initialize`,
                {
                    carts: cart,
                }
            );
            const clientSecret = response.data.data; // Retrieve the client secret from the backend
            return clientSecret;
        } catch (error) {
            console.error("Error initializing payment:", error);
            return null;
        }
    };

    // Finalize Payment by sending payment details to backend
    const finalizePayment = async (cart, paymentIntent) => {
        try {
            const response = await apiClient.post(
                `${config.API_BASE_URL}/product/payment/finalize`,
                {
                    carts: cart,
                    stripeId: paymentIntent, // Send the Stripe PaymentIntent object to the backend
                }
            );
            console.log("Payment finalized successfully:", response.data);
        } catch (error) {
            console.error("Error finalizing payment:", error);
        }
    };

    // Handle the payment submission
    const handlePayment = async (event) => {
        event.preventDefault();

        if (!elements) return;

        // Step 1: Submit the form elements for validation before proceeding with the payment
        const { error: submitError } = await elements.submit();

        if (submitError) {
            setPaymentStatus(`Error submitting form: ${submitError.message}`);
            return;
        }

        // Step 1: Initialize payment and get client secret from backend
        const clientSecret = await initializePayment(cart);

        if (!clientSecret) {
            setPaymentStatus("Failed to get client secret.");
            return;
        }

        // Step 2: Confirm the payment using PaymentElement
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements, // Use the elements instance containing PaymentElement
            clientSecret,
            confirmParams: {
                return_url: "http://localhost/checkout_success", // Optionally add a return URL
            },
        });

        if (error) {
            // Display error message if payment fails
            setPaymentStatus(`Payment failed: ${error.message}`);
        } else if (paymentIntent.status === "succeeded") {
            // Step 3: Finalize payment by sending cart and paymentIntent to the backend
            await finalizePayment(cart, paymentIntent);
            setPaymentStatus("Payment successful!");
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <PaymentElement />{" "}
            {/* PaymentElement used to accept multiple payment methods */}
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </form>
    );
};

export default PaymentForm;
