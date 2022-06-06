import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ui_components/ProductCard";
import '../styles/app.css';

function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //const getProducts = () => axios.get("/api/products/all");
  const getProducts = () => axios.get("/api/products/all");

  useEffect(() => {
    setLoading(true);

    Promise.all([getProducts()]).then(function (results) {
      console.log(results[0]);

      const productsData = results[0];

      setProducts(productsData.data);
      setLoading(false);
    });
  }, []);

  const productFilter = products.filter((res) => {
    
    return res.product_name.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
      </div>
    

      <div className="browser">
        {productFilter.map((product) => (
        <ProductCard 
          key={product.id} 
          data={product} 
          {...product}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
