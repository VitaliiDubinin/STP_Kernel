import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const apiHead = 'https://source.unsplash.com/';
const randApiHead = 'https://source.unsplash.com/500x400/?';
const count_words = (word_array) => {
  let total = 0;
  word_array.forEach(() => {
    total++;
  });
  return total;
}

function ProductCard({ data, product_name, description, price, id, units=null, image = null }) {
  let randImage = randApiHead;
  
  units = units ? units: 'kg';

  if(!image){

    if (count_words(product_name.split()) > 1){
      const name_array = product_name.split();
      console.log(count_words(name_array))
      const total_words = count_words(name_array);
      const noun = name_array[total_words - 1];
      randImage += noun;
      
    }
    else{
      randImage += product_name
    }
    image = randImage;
  }else if(!image.includes('https://')){
    image = apiHead + image;
  }
  
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const { addItem } = useCart();
  return (
        <div className="grid">
          <div className="card-container ">
            <div className="wrapper">
              <div className="card front-face">
                <img src={image} />
              </div>
              <div className="card back-face">
              <div className="remove">
                element
              </div>
              <img src={image} />
              <div className="info">
                <div className="title">{capitalStart(product_name)} {price}€/{units}</div>
                <p>{description}</p>
              </div>
              {/* <Link className="card-link" to={`/api/product/find/${id}`}>
                 See more 
              </Link> */}
              <Link className="card-link" to={`/product/:${id}`}>
                 See more 
              </Link>
              <button
              className="add"
              onClick={() =>            
                addItem({ id: id, product_name, description, price, display_image })
              } >
                add            
            </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductCard;

