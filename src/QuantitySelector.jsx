import React, { useState } from 'react';
import "./App.css";

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(1, prevQuantity - 1); // Ensures quantity is at least 1
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
