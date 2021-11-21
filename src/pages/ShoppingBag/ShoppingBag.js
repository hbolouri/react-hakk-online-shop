import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const ShoppingBag = () => {
  const { products, setProducts, bag, setBag } = useContext(MyContext);

  return (
    <div className="cart">
      <h1 className="cart-header">
        {" "}
        <GiShoppingBag className="cart-icon" />
        Shopping Bag
      </h1>
      <div className="cart-products">
        {bag.map((item) => {
          return (
            <div className="cart-product">
              <Link className="product-class-name" to={`/products/${item.id}`}>
                <div className="image">
                  <img src={item.image} width="100" height="100" alt="" />
                </div>
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-quantity">
                    Piece: <span className="pieces">{item.quantity}</span>
                  </p>
                </div>
              </Link>
              <div className="price">
                <h1>${item.price}</h1>
              </div>
              <div className="buttons">
                {/* <button onClick={() => removeOne(item)} className="btn">
                  Remove One
                </button>
                <button onClick={() => removeAll(item)} className="btn">
                  Remove All
                </button> */}
              </div>
            </div>
          );
        })}
        {/* <div>
          <Button variant="secondary" onClick={handleShow}>
            Pay
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pay</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PaypalComponent />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div> */}
      </div>
    </div>
  );
};

export default ShoppingBag;
