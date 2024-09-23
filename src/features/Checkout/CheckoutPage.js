import AdditionalCheckoutInfo from "./AdditionCheckoutInfo";
import BillingInfo from "./BillingInfo";
import "./Checkout.css";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mt-3 mb-5 pb-5">
                        <h3 className="billing-heading">Billing Information</h3>
                        <BillingInfo />
                        <AdditionalCheckoutInfo/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <CheckoutSummary totalPrice={200} />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
