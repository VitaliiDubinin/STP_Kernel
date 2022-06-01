import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ui_components/ProductCard";

// import css from "../styles/pages.module.css";

function SingleProduct() {
  const location = useLocation();
  const prduct = location.state.data;

  return (
    <div className="pageContainer">
      <h1>{ProductCard.name}</h1>
      SingleProduct Name
    </div>
  );
}

export default SingleProduct;
