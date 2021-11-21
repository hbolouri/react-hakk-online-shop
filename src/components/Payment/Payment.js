import React from "react";
import "./Payment.css";
import Paypal from "./Paypal";


export default function Payment() {

  


  const item = {
    name: "Shirt",
    description: "Women's shirt",
    price: "80",
    image:
      "https://5.imimg.com/data5/FX/KJ/MY-36374561/ladies-denim-shirt-500x500.jpg",
  };

  

  
  return (
    <div className="Payment">
      <h1>Payment</h1>

      <div className="Payment-section">
        <div className="Payment-item">
          <div className="image">
            <img alt='' src={item.image} />
          </div>
          <div className="text">
            <h3> {item.name} </h3>
            <p> {item.description} </p>
            <h4> {item.price}$ </h4>
            <button>Remove</button>
          </div>
        </div>

        <div className="Paypal">
          <Paypal />
        </div>
      </div>
    </div>
  );
}
