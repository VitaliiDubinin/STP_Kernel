import React from "react";
// import css from './producCard.module.css';
import { Link } from "react-router-dom";

function ProductCard({data, product_name, description, units, price, image = null }) {

  const pic = image ? image : "no image available";

  return (
    <div className="productCard">
      <div className="productImage">{pic}</div>
      <div className="productBodyContainer">
        <h3 className="productName"> {product_name} </h3>
        <div className="shortDescription">
          {description}. <br />

        </div>
        <div className="cardFooter">

        <Link to={`/api/product/find/${data.id}`} state={{ data: data}}>
          See more
          </Link>
          {/* <Link to="/:productId" data={data}>
            <p className="seeMore">see more</p>
          </Link> */}

        {/* <Link to={`/api/products/${data.id}`} 
            product_name={ product_name }
            description={ description }
            units={units}  
            price={price} 
            image={image}>
          See more
          </Link> */}
          <button type="submit" className="addToCartBtn">
            {" "}
            add{" "}
          </button>
          <div className="productPrice">
            {price}€/{units}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

//productName
//description
//totalAmount
//units
//image
//id
