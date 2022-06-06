import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import css from "./styles/main.module.css";
import Navbar from "../assets/components/ui_components/Navbar";

import SingleProduct from "../assets/pages/SingleProduct";
import Profile from "../assets/pages/Profile";
import Cart from "../assets/pages/Cart";
import CheckOut from "../assets/pages/CheckOut";
import Footer from "../assets/components/ui_components/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*<Route path="/:productId" element={<SingleProduct />}></Route>*/}
        <Route path="/api/product/find/:id" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/checkout" element={<CheckOut />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/login/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Main />,
  </React.StrictMode>
);
