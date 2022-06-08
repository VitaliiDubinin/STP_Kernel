// import React from "react";
// // import css from './productCard.module.css';
// import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";

// function ProductCard({
//   product,
//   productName,
//   shortDescription,
//   totalAmount,
//   units,
//   productPrice,
//   imageUrl = null,
// }) {
//   const randImg = 1;
//   const image = imageUrl ? imageUrl : "no image available";
//   const { addItem } = useCart();
//   console.log(product);
//   return (
//     <div className="productCard">
//       <div className="productImage">{image}</div>
//       <div className="productBodyContainer">
//         <h3 className="productName"> {productName} </h3>
//         <div className="shortDescription">
//           {shortDescription}. <br />
//           In storage:{totalAmount}
//           {units}
//         </div>
//         <div className="cardFooter">
//           <Link to="/:productId">
//             <p className="seeMore">see more</p>
//           </Link>
//           <button className="btn btn-success" onClick={() => addItem(product)}>
//             Add to cart
//           </button>
//           <div className="productPrice">
//             {productPrice}€/{units}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
// const product = { productName, shortDescription, productPrice, imageUrl };

const ProductCard = ({
  product: { id, productName, shortDescription, productPrice, imageUrl },
}) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        {/* <img src={img} className="card-img-top img-fluid" alt="..." /> */}
        <Link to={`products/${id}`}>
          <div className="card-body text-center">
            <h5 className="card-title">$ {productName}</h5>
            <p className="card-text">{shortDescription}</p>
            <p className="card-text">{productPrice}</p>
            <p className="card-text">{imageUrl}</p>

            <button
              className="btn btn-success"
              onClick={() =>
                addItem({
                  id,
                  productName,
                  shortDescription,
                  price: productPrice,
                  imageUrl,
                })
              }
            >
              Add to cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
