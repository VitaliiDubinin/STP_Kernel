import React, { useEffect, useState } from "react";
// import css from "../styles/pages.module.css";
function Cart() {
  const [cart, setCart] = useState(
     cart=[
      { 
        id: 1,
        name:'kbchb',
        imge:'fdcgahc',
        quantity: 3,
        farner_id: 23
      },
      { 
        id: 2,
        name:'kbchb',
        imge:'fdcgahc',
        quantity: 3,
        farmer_id: 23
      },
      { 
        id: 3,
        name:'kbchb',
        imge:'fdcgahc',
        quantity: 1,
        farmer_id: 20
      }
    ]
  )};
  const fillCart_handler =() => {
    useEffect(
      
    )
  return <div className="pageContainer">
    Cart
    read from data/state (use state)
    show.map
    on submit delete from database
  </div>;
}

export default Cart;
