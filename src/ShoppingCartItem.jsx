import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

const ShoppingCartItem = () => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setItemQuantity(newQuantity);
  };

  return (
      <QuantitySelector initialQuantity={itemQuantity} onQuantityChange={handleQuantityChange} />
  );
};

export default ShoppingCartItem;
