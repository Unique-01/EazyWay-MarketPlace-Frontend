import BillingInfo from "./BillingInfo";
import "./Checkout.css";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <BillingInfo />
                </div>
                <div className="col-lg-4">
                    <CheckoutSummary totalPrice={200} />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
