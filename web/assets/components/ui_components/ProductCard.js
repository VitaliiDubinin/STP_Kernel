import React from "react";
// import css from './producCard.module.css';
import { Link } from "react-router-dom";


function ProductCard({ productName, shortDescription, totalAmount, units, productPrice, imageUrl = null }) {

  const randImg = 1;
  const image = imageUrl ? imageUrl : "no image available";

  return (
    <div className="productCard">
      <div className="productImage">{image}</div>
      <div className="productBodyContainer">
        <h3 className="productName"> {productName} </h3>
        <div className="shortDescription">
          {shortDescription}. <br />
          In storage:{totalAmount}
          {units}
        </div>
        <div className="cardFooter">
          <Link to="/:productId">
            <p className="seeMore">see more</p>
          </Link>
          <button type="submit" className="addToCartBtn">
            {" "}
            add{" "}
          </button>
          <div className="productPrice">
            {productPrice}€/{units}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

//productName
//shortDescription
//description
//totalAmount
//units
//image
//id
