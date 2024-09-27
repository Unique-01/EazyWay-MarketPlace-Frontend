import React, { useState, useContext, useEffect } from "react";
import ProductContext from "shared/context/ProductContext";
// import "./CartItemCard.css";
import { FaTimes } from "react-icons/fa";
import QuantitySelector from "shared/components/QuantitySelector";
import { useCart } from "shared/context/CartContext";
import Loading from "shared/components/Loading";

const CartItemCard = ({ cartItem, onQuantityChange }) => {
    const { removeFromCart, updateQuantity } = useCart();
    const { products, loading } = useContext(ProductContext);
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (!loading) {
            const foundProduct = products.find(
                (p) => p._id.toString() === cartItem.product.toString()
            );
            setProduct(foundProduct);
            setTotalPrice(foundProduct.amount * cartItem.quantity);
        }
    }, [loading, cartItem, products]);

    const handleQuantityChange = (newQuantity) => {
        updateQuantity(product._id, newQuantity);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <tr className="align-middle poppins cart-item ">
            <td className="ps-4">
                <div className="d-inline-flex align-items-center gap-3 ">
                    {product && product.image && product.image.length > 0 ? (
                        <img
                            src={
                                product.image.length > 0 && product.image[0].url
                            }
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxWidth: "97px" }}
                        />
                    ) : (
                        ""
                    )}
                    <span className="wishlist-product-name fw-normal">
                        {product.title}
                    </span>
                </div>
            </td>
            <td className="text-center poppins">
                {product.discountedPrice ? (
                    <div>
                        <span className="text-decoration-line-through">
                            ${product.originalPrice}
                        </span>
                        <br />
                        <span>${product.discountedPrice}</span>
                    </div>
                ) : (
                    <span className="wishlist-product-price fw-normal">
                        ${product.amount}
                    </span>
                )}
            </td>
            <td>
                <QuantitySelector
                    price={product.amount}
                    prevQuantity={cartItem.quantity}
                    onQuantityChange={handleQuantityChange}
                />
            </td>
            <td>
                <div>
                    <p className="poppins fw-medium cart-item-total-price">
                        ${totalPrice.toFixed(2)}
                    </p>
                </div>
            </td>
            <td className="pe-3">
                <button
                    onClick={() => removeFromCart(product._id)}
                    className="wishlist-cancel d-inline-flex align-items-center justify-content-center">
                    <FaTimes />
                </button>
            </td>
        </tr>
    );
};

export default CartItemCard;
