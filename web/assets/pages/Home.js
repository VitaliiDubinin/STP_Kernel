import React, { useState, useEffect } from "react";
// import css from "../styles/pages.module.css";
import Navbar from "../components/ui_components/Navbar";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { getProducts } from "../data";

import ProductCard from "../components/ui_components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { totalItems } = useCart();
  console.log(totalItems, "totalItems");

  const productFilter = products.filter((res) => {
    return res.productName.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    console.log(getProducts(), "getProducts");
    setProducts(getProducts());
    //use axios to get the data from database:
  }, []);

  return (
    // <div className={css.pageContainer}>
    <div className="pageContainer">
      <div className="browser">
        {productFilter.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
