import { Link } from "react-router-dom";
import { useCart } from "shared/context/CartContext";

const CartSummary = ({ totalPrice }) => {
    const { cartItems } = useCart();
    return (
        <div className="card mt-4">
            <div className="cart-summary-body card-body">
                <h5 className="card-title">Order Summary</h5>
                <div className="pt-3">
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
                <Link
                    to={cartItems.length > 0 ? "/checkout" : ""}
                    
                    className="btn btn-primary cart-summary-btn w-100 text-white rounded-pill fw-semibold py-2">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartSummary;
