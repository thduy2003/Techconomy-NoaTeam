import React from "react";
import { Routes, Route, Switch, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import ProductDetail from "../components/ProductDetail";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
const RoutesA = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route exact path="/" element={<HomePage> </HomePage>}></Route>
          <Route
            exact
            path="/catalog"
            element={<ProductsPage></ProductsPage>}
          ></Route>
          <Route
            exact
            path="/catalog/:productSlug"
            element={<ProductDetail></ProductDetail>}
          />
          <Route exact path="/cart" element={<CartPage></CartPage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default RoutesA;
