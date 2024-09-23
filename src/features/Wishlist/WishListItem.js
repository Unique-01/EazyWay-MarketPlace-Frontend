import React from "react";
import "./WishListItem.css";
import { FaTimes } from "react-icons/fa";

const WishListItem = ({ product }) => {
    return (
        <tr className="align-middle ">
            <td className="ps-4">
                <div className="d-inline-flex align-items-center gap-3 ">
                    <img
                        src={require(`/src/assets/images/products/${product.image}`)}
                        alt={product.name}
                        className="img-fluid"
                        style={{ maxWidth: "97px" }}
                    />
                    <span className="wishlist-product-name">
                        {product.name}
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
                        ${product.price}
                    </span>
                )}
            </td>
            <td>
                <span
                    className={`status rounded-pill p-1 ${
                        product.isAvailable
                            ? "available text-primary"
                            : "unavailable"
                    }`}>
                    {product.isAvailable ? "Available" : "Out of Stock"}
                </span>
            </td>
            <td>
                <div className="d-flex align-items-center gap-3">
                    <button
                        className={`btn rounded-pill wishlist-cart px-4 ${
                            product.isAvailable
                                ? "btn-primary text-white"
                                : " btn-muted"
                        }`}
                        disabled={!product.isAvailable}>
                        Add to Cart
                    </button>
                    <button className="wishlist-cancel d-inline-flex align-items-center justify-content-center">
                        <FaTimes />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default WishListItem;
