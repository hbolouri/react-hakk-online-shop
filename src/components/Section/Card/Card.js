import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  console.log(product);
  return (
    <Link to={`/singleProduct/${product.id}`}>
      <div
        className="Card"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {product.title}
      </div>
    </Link>
  );
}
