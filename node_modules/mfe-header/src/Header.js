import React from "react";
import useStore from "host/store";
import { formatCurrency } from "host/utils";

const Header = () => {
  const cartCount = useStore((state) => state.cartCount);
  return (
    <h1>
      🛒 Cart: {cartCount} item(s) - Total: {formatCurrency(cartCount * 500)}
    </h1>
  );
};

export default Header;
