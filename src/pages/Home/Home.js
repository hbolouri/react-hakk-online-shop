import React from 'react';
import './Home.css'
import '../../Carousel/Carousel'
import Carousel from '../../Carousel/Carousel';
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { MyContext } from "../../Context/context";

const Home = () => {
  
  const { products, bag, setBag } = useContext(MyContext);
  let { quantity, setQuantity } = useContext(MyContext);

  const addToBag = (item) => {
    let addedItem = bag.find((product) => product.title === item.title);
    if (addedItem) {
      addedItem.number++;
      quantity++;
      setQuantity(quantity);
      setBag([...bag]);
    } else {
      item.number = 1;
      setBag([...bag, item]);
      quantity++;
      setQuantity(quantity);
    }
  };
  console.log(bag);

  return (
    
    <div>
      <section>
            <Carousel/>
       </section>
    
      {products.map((product) => {
        return (
          <>
            <div>
              <Link to={`/singleProduct/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <div>
                <img src={product.image} alt="" width="200" />
              </div>
            </div>
              {/* for krishna */}
            <button onClick={() => addToBag(product)}>Add To Bag</button> 
          </>
        );
      })}
    </div>
  );
};

export default Home;
