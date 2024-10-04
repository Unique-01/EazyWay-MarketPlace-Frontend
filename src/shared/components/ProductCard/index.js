import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { ReactComponent as ShoppingBasket } from "assets/icons/shopping-basket.svg";
import "./ProductCard.css";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
import picture from "assets/images/eazyWay-logo.png";
import { useCart } from "shared/context/CartContext";
import { useWishlist } from "shared/context/WishListContext";

const ProductCard = ({ product }) => {
    const { addToCart, isInCart, removeFromCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    return (
        <div className="card product-card">
            <Link to={`/products/${product._id}`}>
                {product.image.length > 0 ? (
                    <img
                        src={product.image[0].url}
                        className="card-img-top"
                        alt={product.title}
                    />
                ) : (
                    <img
                        src={picture}
                        className="card-img-top"
                        alt={product.title}
                    />
                )}
            </Link>
            <div className="card-body product-card-body">
                <Link to={`/products/${product._id}`}>
                    <p className="card-title product-name">{product.title}</p>
                    <p className="card-text product-price fw-semibold">
                        ${product.amount}
                    </p>
                    <StarRating rating={product.rating} />
                </Link>
                <button
                    onClick={
                        isInCart(product._id)
                            ? () => removeFromCart(product._id)
                            : () => addToCart(product._id)
                    }
                    className={`icon-btn btn cart-btn p-2 ${
                        isInCart(product._id) ? "icon-fill" : ""
                    }`}>
                    <ShoppingBasket className="cart-icon" />
                </button>
            </div>
            <div className="overlay-div">
                <button
                    onClick={
                        isInWishlist(product._id)
                            ? () => removeFromWishlist(product._id)
                            : () => addToWishlist(product)
                    }
                    className={`icon-btn btn wishlist-overlay ${
                        isInWishlist(product._id)
                            ? "bg-primary text-white"
                            : "text-dark"
                    }`}>
                    <FaRegHeart className="overlay-icon" />
                </button>
                {/* <button
                    onClick={toggleEyeButton}
                    className={`icon-btn btn eye-overlay ${
                        isEyeToggled ? "bg-primary text-white" : "text-dark"
                    }`}>
                    <AiOutlineEye className="overlay-icon" />
                </button> */}
            </div>
        </div>
    );
};

export default ProductCard;
