import React, { Suspense } from "react";
const Header = React.lazy(() => import("header/Header"));
const ProductList = React.lazy(() => import("products/ProductList"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Header />
    <ProductList />
  </Suspense>
);

export default App;
