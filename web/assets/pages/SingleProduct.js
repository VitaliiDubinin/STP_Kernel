import React from "react";
import { useLocation } from "react-router-dom";
// import css from "../styles/pages.module.css";

function SingleProduct() {
  const location = useLocation();
  const product = location.state.data;

  return (
    <div className="pageContainer">
      <h1>{product.product_name}</h1>
      SingleProduct Name
      <div>test test</div>
    </div>
  );
}

export default SingleProduct;
