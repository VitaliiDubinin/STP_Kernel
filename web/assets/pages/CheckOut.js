import React from "react";
import { useCart } from "react-use-cart";

function CheckOut() {
  const { cartTotal } = useCart();

  return (
    <body>
      <h1>CheckOut</h1>
      <h1>{cartTotal}</h1>
      <form action="#">
        <div className="form-group">
          <label>Total Amount</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select className="form-control">
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
            <option>Cash on Delivery</option>
          </select>
        </div>
        <div className="form-group ">
          <label>Card Number</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Name on Card</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </body>
  );
}

export default CheckOut;
