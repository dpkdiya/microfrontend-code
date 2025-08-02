import React from "react";
import useStore from "host/store";
import { formatCurrency } from "host/utils";

const ProductList = () => {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <ul>
      <li>
        📱 Phone - {formatCurrency(999)}{" "}
        <button onClick={addToCart}>Add</button>
      </li>
      <li>
        💻 Laptop - {formatCurrency(24999)}{" "}
        <button onClick={addToCart}>Add</button>
      </li>
      <li>
        🎧 Headphones - {formatCurrency(2999)}{" "}
        <button onClick={addToCart}>Add</button>
      </li>
    </ul>
  );
};

export default ProductList;
