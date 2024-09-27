import React, { useState } from "react";
import "./QuantitySelector.css";

const QuantitySelector = ({ price, onQuantityChange, prevQuantity }) => {
    const [quantity, setQuantity] = useState(prevQuantity || 1);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
        // onQuantityChange(newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
            // onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="d-inline-flex align-items-center border rounded-pill p-1">
            <button className="selector-btn" onClick={handleDecrement}>
                &#8722;
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="selector-btn" onClick={handleIncrement}>
                &#43;
            </button>
        </div>
    );
};

export default QuantitySelector;
