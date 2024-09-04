import CartItems from "pages/Products/products.json";
import CartItemCard from "./CartItemCard";
import "./Cart.css";
import CouponCode from "./CouponCode";
import CartSummary from "./CartSummary";
import { useState, useEffect } from "react";
const ShoppingCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleQuantityChange = (index, newTotalPrice) => {
        const updatedCartItems = [...CartItems];
        updatedCartItems[index].totalPrice = newTotalPrice;

        const newTotal = updatedCartItems.reduce(
            (acc, item) => acc + (item.totalPrice || item.price),
            0
        );
        setTotalPrice(newTotal);
    };

    useEffect(() => {
        const initialTotal = CartItems.reduce(
            (acc, item) => acc + item.price,
            0
        );
        setTotalPrice(initialTotal);
    }, []);

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
                            {CartItems.map((product, index) => (
                                <CartItemCard
                                    key={index}
                                    product={product}
                                    onQuantityChange={(newTotalPrice) =>
                                        handleQuantityChange(
                                            index,
                                            newTotalPrice
                                        )
                                    }
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <CouponCode />
                    <CartSummary totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
