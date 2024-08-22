import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { ReactComponent as ShoppingBasket } from "assets/icons/shopping-basket.svg";
import useButtonToggle from "hooks/useButtonToggle";
import "./ProductCard.css";
import StarRating from "../StarRating";

const ProductCard = ({ product }) => {
    const [isCartToggled, toggleCartButton] = useButtonToggle();
    const [isWishListToggled, toggleWishListButton] = useButtonToggle();
    const [isEyeToggled, toggleEyeButton] = useButtonToggle();

    return (
        <div className="card product-card">
            <img
                src={require(`/src/assets/images/products/${product.image}`)}
                className="card-img-top"
                alt={product.name}
            />
            <div className="card-body">
                <p className="card-title product-name">{product.name}</p>
                <p className="card-text product-price fw-semibold">
                    ${product.price}
                </p>
                <StarRating rating={product.rating} />
                <button
                    onClick={toggleCartButton}
                    className={`icon-btn btn cart-btn p-2 ${
                        isCartToggled ? "icon-fill" : ""
                    }`}>
                    <ShoppingBasket className="cart-icon" />
                </button>
            </div>
            <div className="overlay-div">
                <button
                    onClick={toggleWishListButton}
                    className={`icon-btn btn wishlist-overlay ${
                        isWishListToggled
                            ? "bg-primary text-white"
                            : "text-dark"
                    }`}>
                    <FaRegHeart className="overlay-icon" />
                </button>
                <button
                    onClick={toggleEyeButton}
                    className={`icon-btn btn eye-overlay ${
                        isEyeToggled ? "bg-primary text-white" : "text-dark"
                    }`}>
                    <AiOutlineEye className="overlay-icon" />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
