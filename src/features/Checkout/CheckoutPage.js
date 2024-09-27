import { useCart } from "shared/context/CartContext";
import AdditionalCheckoutInfo from "./AdditionCheckoutInfo";
import BillingInfo from "./BillingInfo";
import "./Checkout.css";
import CheckoutSummary from "./CheckoutSummary";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const { cartTotal } = useCart();
    const navigate = useNavigate();

    const handleSubmit = (selectedPayment) => {
        if (selectedPayment === "card") {
            navigate("/checkout/payment");
        }
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
