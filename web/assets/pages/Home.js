import axios from "axios";
import React, { useState, useEffect } from "react";
// import css from "../styles/pages.module.css";

import ProductCard from "../components/ui_components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //dummy axios
  //const getProducts = () => axios.get('http://localhost:3001/products');
  const getProducts = () => {
    //const data = axios.get()
    return 

  };

  const productFilter = products.filter((res) => {
    return res.productName.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    setProducts(getProducts());
    //use axios to get the data from database:
  }, []);

  return (
    // <div className={css.pageContainer}>
    <div className="pageContainer">
      <h1>Home</h1>
      <div>
        {/* <div className={css.search}> */}
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
        </div>
      </div>

      {/* <div className={css.browser}> */}
      <div className="browser">
        {productFilter.map((product) => (
          <ProductCard key={product.id} data={...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
