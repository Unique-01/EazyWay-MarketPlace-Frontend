// import { useState } from "react";

const CheckoutSummary = ({ totalPrice, onSubmit }) => {
    // const [selectedPayment, setSelectedPayment] = useState("");

    // const handlePaymentChange = (e) => {
    //     setSelectedPayment(e.target.value);
    // };

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <div className="card mt-4">
            <div className="cart-summary-body card-body">
                <h5 className="card-title">Order Summary</h5>
                <div className="pt-3">
                    <div></div>
                    <p className="border-bottom pb-2">
                        <span>Subtotal</span>
                        <span>{totalPrice.toFixed(3)}</span>
                    </p>
                    <p className="border-bottom pb-2">
                        <span>Shipping</span>
                        <span>Free</span>
                    </p>
                    <p>
                        <span>Total</span>
                        <span className="fw-semibold">
                            {totalPrice.toFixed(3)}
                        </span>
                    </p>
                </div>
                {/* <div>
                    <h5>Select Payment Method</h5>
                    <div className="mb-3">
                        <form>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="payment"
                                    value="cash"
                                    onChange={handlePaymentChange}
                                />
                                <label
                                    htmlFor="cashPayment"
                                    className="form-check-label checkout-payment">
                                    Cash on Delivery
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="payment"
                                    value="card"
                                    onChange={handlePaymentChange}
                                />
                                <label
                                    htmlFor="cardPayment"
                                    className="form-check-label checkout-payment">
                                    Card
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="payment"
                                    value="paypal"
                                    onChange={handlePaymentChange}
                                />
                                <label
                                    htmlFor="paypalPayment"
                                    className="form-check-label checkout-payment">
                                    Paypal
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="payment"
                                    value="amazon"
                                    onChange={handlePaymentChange}
                                />
                                <label
                                    htmlFor="amazonPayment"
                                    className="form-check-label checkout-payment">
                                    Amazon Pay
                                </label>
                            </div>
                        </form>
                    </div>
                </div> */}
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary cart-summary-btn w-100 text-white rounded-pill fw-semibold py-2">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CheckoutSummary;
