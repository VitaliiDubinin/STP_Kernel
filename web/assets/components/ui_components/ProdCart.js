import React from "react";
import { useCart } from "react-use-cart";

const ProdCart = ({ data, product_name, description, units, price, id, image = null }) => {
  c; 
  const { addItem } = useCart();
  const pic = image ? image : "no image available";
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div className="card-body text-center">
          <h5 className="card-title">$ {data.product_name}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">{data.price}</p>
          <p className="card-text">{pic}</p>

          <button
            className="btn btn-success"
            onClick={() =>
              addItem({
                id,
                product_name,
                description,
                price,
                pic,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdCart;
