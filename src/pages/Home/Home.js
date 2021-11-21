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
      {products.map((product) => {
        return (
          <>
            <Link to={`/singleProduct/${product.id}`}>
              <div>
                <h2>{product.title}</h2>
                <div>
                  <img src={product.image} alt="" width="200" />
                </div>
              </div>
            </Link>
            <button onClick={addToBag(product)}>Add To Bag</button>
          </>
        );
      })}
    </div>
  );
};

export default Home;
