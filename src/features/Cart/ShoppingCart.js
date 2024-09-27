import CartItemCard from "./CartItemCard";
import "./Cart.css";
import CouponCode from "./CouponCode";
import CartSummary from "./CartSummary";
import { useState, useEffect } from "react";
import { useCart } from "shared/context/CartContext";
import { useProduct } from "shared/context/ProductContext";
const ShoppingCart = () => {
    const { cartItems, updateCartTotal } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);
    const { products } = useProduct();

    useEffect(() => {
        const calculateTotalPrice = () => {
            const newTotal = cartItems.reduce((acc, item) => {
                const product = products.find(
                    (p) => p._id.toString() === item.product.toString()
                );
                // Check if the product is found and has a valid amount
                if (product) {
                    const itemTotal = product.amount * item.quantity; // Assuming `amount` is the product price
                    return acc + itemTotal;
                }
                return acc;
            }, 0);
            setTotalPrice(newTotal);
            updateCartTotal(newTotal);
        };

        calculateTotalPrice(); // Calculate total price whenever cartItems change or products load
    }, [cartItems, products, updateCartTotal]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="table-responsive col-lg-8">
                    <table className=" cart-table table border">
                        <thead>
                            <tr className="text-uppercase table-head border">
                                <th scope="col" className="">
                                    Product
                                </th>
                                <th scope="col">Price</th>
                                <th scope="col"> Quantity</th>
                                <th scope="col"> Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {cartItems.length > 0 &&
                                cartItems.map((product, index) => (
                                    <CartItemCard
                                        key={index}
                                        cartItem={product}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    {/* <CouponCode /> */}
                    <CartSummary totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
