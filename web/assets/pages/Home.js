import React, { useState, useEffect } from "react";
// import css from "../styles/pages.module.css";
import Navbar from "../components/ui_components/Navbar";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import ProductCard from "../components/ui_components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { totalItems } = useCart();
  console.log(totalItems, "totalItems");

  //dummy axios
  //const getProducts = () => axios.get('http://localhost:3001/products');
  const getProducts = () => {
    return [
      {
        productName: "RICE",
        shortDescription: "a very good rice",
        description:
          "this product was seeded and farmed in the local farms of helsinki, the minimun tu buy is 1kg",
        quantity: 100,
        units: "kg",
        productPrice: 1.55,
        image: null,
        id: 1,
      },
      {
        productName: "potatoes",
        shortDescription: "this potatos are the best",
        description:
          "try my potatoes and you will fall inlove for first time with a potato",
        quantity: 20,

        units: "kg",
        productPrice: 2.25,
        image: null,
        id: 2,
      },
      {
        productName: "zuccini",
        shortDescription: "the perfect size of a zuccini",
        description:
          "combine this zuccini with vaseline, condom and a bottle of wine then find out what climax is",
        quantity: 10,

        units: "unit",
        productPrice: 0.99,
        image: null,
        id: 3,
      },
      {
        productName: "carrots",
        shortDescription: "very good for eyes health",
        description:
          "Have you ever seen a bunny with glasses?! if you are not a doctor or a biologist dont comment",
        quantity: 200,

        units: "bunch",
        productPrice: 5.99,
        image: null,
        id: 4,
      },
      {
        productName: "punkin",
        shortDescription: "try my punkin",
        description: "just dont be a coward an buy my punkin",
        quantity: 1,
        units: "unit",
        productPrice: 100,
        image: null,
        id: 5,
      },
      // {
      //   productName: "tomatoes",
      //   shortDescription: "in red and yellow",
      //   description:
      //     "a salad witout tomatoes is like a a battle cruise armada ship without serial number",
      //   totalAmount: 50,
      //   units: "pound",
      //   productPrice: 0.65,
      //   image: null,
      //   id: 6,
      // },
      // {
      //   productName: "eggplant",
      // shortDescription: "funny name but tasty veggy",
      //   description:
      //     "make the best jokes about eggplants with this beauties of vegetables",
      //   totalAmount: 20,
      //   units: "unit",
      //   productPrice: 2,
      //   image: null,
      //   id: 7,
      // },
      // {
      //   productName: "faba beans",
      //   shortDescription: "get this organic jewels",
      //   description: "get the beans and grow a magic tree in your back yard",
      //   totalAmount: 3,
      //   units: "bean",
      //   productPrice: 99.99,
      //   image: null,
      //   id: 8,
      // },
      // {
      //   productName: "cucumber",
      //   shortDescription: "the perfect size of a cucumber",
      //   description:
      //     "combine this cucumber with vaseline, condom and a bottle of wine then find out what climax is",
      //   totalAmount: 10,
      //   units: "unit",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 9,
      // },
      // {
      //   productName: "lettuce",
      //   shortDescription: "fres as a lettuce",
      //   description: "is so fresh you cant say no ",
      //   totalAmount: 10,
      //   units: "unit",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 10,
      // },
      // {
      //   productName: "couliflower",
      //   shortDescription: "weird and delicious",
      //   description: "you bet they are the weirdest",
      //   totalAmount: 10,
      //   units: "unit",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 11,
      // },
      // {
      //   productName: "onions",
      //   shortDescription: "wanna cry.. of happiness",
      //   description: "with more crying power that the competitors's",
      //   totalAmount: 10,
      //   units: "kg",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 12,
      // },
      // {
      //   productName: "chilli",
      //   shortDescription: "feel the pain",
      //   description: "garantee: you will taste it today and tomorrow morning",
      //   totalAmount: 10,
      //   units: "g",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 13,
      // },
      // {
      //   productName: "beetroot",
      //   shortDescription: "very purple",
      //   description: "if purpleness is the messure this are the kings",
      //   totalAmount: 15,
      //   units: "3 units",
      //   productPrice: 0.99,
      //   image: null,
      //   id: 14,
      // },
      // {
      //   productName: "chick peas",
      //   shortDescription: "already cooked",
      //   description: "you only need to serve them",
      //   totalAmount: 10,
      //   units: "kg",
      //   productPrice: 20.99,
      //   image: null,
      //   id: 15,
      // },
      // {
      //   productName: "brussel sprows",
      //   shortDescription: "terrible taste but very healthy",
      //   description:
      //     "Trivia: did you know that brussels sprows are not from brussels",
      //   totalAmount: 10,
      //   units: "kg",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 16,
      // },
      // {
      //   productName: "brocoli",
      //   shortDescription: "a tree looking veggie",
      //   description: "this are brought from the far far mellumaki",
      //   totalAmount: 10,
      //   units: "kg",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 17,
      // },
      // {
      //   productName: "spinach",
      //   shortDescription: "popeye food",
      //   description:
      //     "if you want to rescue your lady from brutus you gotta eat this",
      //   totalAmount: 10,
      //   units: "g",
      //   productPrice: 10.99,
      //   image: null,
      //   id: 18,
      // },
      // {
      //   productName: "garlic",
      //   tDescriptioshorn: "ideal vs vampires",
      //   description:
      //     "its known that vampires dont eat garlic cause the bad breath it leaves after",
      //   totalAmount: 10,
      //   units: "g",
      //   productPrice: 1.99,
      //   image: null,
      //   id: 19,
      // },
    ];
  };

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
      {/* <Navbar /> */}
      {/* <h1 style={{ fontSize: "100" }}>Home</h1> */}
      {/* <div>
        
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
        </div>
      </div> */}

      {/* <div className={css.browser}> */}
      <Link to="/cart">{totalItems}</Link>

      <div className="browser">
        {productFilter.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
