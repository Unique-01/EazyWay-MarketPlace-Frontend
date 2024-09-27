import React from "react";
import "./WishListItem.css";
import { FaTimes } from "react-icons/fa";
import { useCart } from "shared/context/CartContext";
import { useWishlist } from "shared/context/WishListContext";

const WishListItem = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    const { removeFromWishlist } = useWishlist();
    return (
        <tr className="align-middle ">
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
            <td className="text-center">
                {product.discountedPrice ? (
                    <div>
                        <span className="text-decoration-line-through">
                            ${product.originalPrice}
                        </span>
                        <br />
                        <span>${product.discountedPrice}</span>
                    </div>
                ) : (
                    <span className="wishlist-product-price">
                        ${product.amount}
                    </span>
                )}
            </td>
            <td>
                <span
                    className={`status rounded-pill p-1 ${
                        product.quantity !== 0
                            ? "available text-primary"
                            : "unavailable"
                    }`}>
                    {product.quantity !== 0 ? "Available" : "Out of Stock"}
                </span>
            </td>
            <td>
                <div className="d-flex align-items-center gap-3">
                    <button
                        onClick={() => addToCart(product._id)}
                        className={`btn rounded-pill wishlist-cart px-4 ${
                            product.quantity !== 0
                                ? "btn-primary text-white"
                                : " btn-muted"
                        }`}
                        disabled={
                            product.quantity === 0 || isInCart(product._id)
                        }>
                        Add to Cart
                    </button>
                    <button
                        onClick={() => removeFromWishlist(product._id)}
                        className="wishlist-cancel d-inline-flex align-items-center justify-content-center">
                        <FaTimes />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default WishListItem;
