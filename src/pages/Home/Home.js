import React from "react";
import products from "../../api/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Link to={`/singleProduct/${product.id}`}>
            <div>
              <h2>{product.title}</h2>
              <div>
                <img src={product.image} alt="" width="200" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
