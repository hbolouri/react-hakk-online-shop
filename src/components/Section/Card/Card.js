import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  console.log(product);
  return (
    <div className="Card" style={{ backgroundImage: `url(${product.image})` }}>
      <Link to={`/singleProduct/${product.id}`}>{product.title}</Link>
    </div>
  );
}
