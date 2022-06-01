import React from "react";
// import css from './producCard.module.css';
import { Link } from "react-router-dom";
import axios from "axios";

const randPicAPI = 'https://source.unsplash.com/500x400/?'; //head api

function ProductCard({ productName, shortDescription, totalAmount, units, productPrice, imageUrl = null }) {

  //const randImg = axios.get(randPicAPI + toLowerCase(productName));
  //const image = imageUrl ? imageUrl : randImg;

  return (
    <div className="productCard">
      <div className="productImage"><img src={imageUrl} className="image" alt={"No " + productName + " image available."} /></div>
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
