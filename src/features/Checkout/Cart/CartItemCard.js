import React, { useState } from "react";
// import "./CartItemCard.css";
import { FaTimes } from "react-icons/fa";
import QuantitySelector from "shared/components/QuantitySelector";

const CartItemCard = ({ product, onQuantityChange }) => {
    const [totalPrice, setTotalPrice] = useState(product.price);

    const handleQuantityChange = (newQuantity, newTotalPrice) => {
        setTotalPrice(newTotalPrice);
        onQuantityChange(newTotalPrice);
    };

    return (
        <tr className="align-middle poppins cart-item ">
            <td className="ps-4">
                <div className="d-inline-flex align-items-center gap-3 ">
                    <img
                        src={require(`/src/assets/images/products/${product.image}`)}
                        alt={product.name}
                        className="img-fluid"
                        style={{ maxWidth: "97px" }}
                    />
                    <span className="wishlist-product-name fw-normal">
                        {product.name}
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
                        ${product.price}
                    </span>
                )}
            </td>
            <td>
                <QuantitySelector
                    price={product.price}
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
                <button className="wishlist-cancel d-inline-flex align-items-center justify-content-center">
                    <FaTimes />
                </button>
            </td>
        </tr>
    );
};

export default CartItemCard;
