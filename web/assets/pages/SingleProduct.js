import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
import { getProducts } from "../data";

// import css from "../styles/pages.module.css";

const SingleProduct = () => {
  let { id } = useParams();
  const products = getProducts();
  console.log(typeof id);
  const product = products.find((product) => product.id === id * 1);
  //const [product, setProduct] = useState(null);

  // axios
  //   .get(`http://localhost:8507/api/products/find/${id}`)
  //   .then((res) => {
  //     setProduct(res.data);
  //     console.log(res.data, "res.data");
  //   })
  //   .catch((err) => console.log(err));

  const { addItem } = useCart();
  return (
    <div className="col-10 mx-auto m-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div className="card-body text-center">
          <img
            src={product.image}
            alt={product.productName}
            className="card-image-top img-fluid mb-3"
            style={{ width: "15rem", marginBottom: "1rem" }}
          />
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.shortDescription}</p>
          <p className="card-text">{product.productPrice}</p>

          <button className="btn btn-success" onClick={() => addItem(product)}>
            Add to cart
          </button>
          <a className="btn btn-success m-2" href="/">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
