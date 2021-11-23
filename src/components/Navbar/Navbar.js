import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { MyContext } from "../../Context/context";

export default function Navbar() {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const { user, quantity, products, setProducts } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //onChange
  // const searchProduct = (e) => {
  //   console.log(e.target.value);
  //   let searchedProducts = products.filter((product) =>
  //     product.title.includes(e.target.value)
  //   );
  //   setProducts(searchedProducts);
  // };

  //useRef()
  const searchValue = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.searchItem.value);

    let updatedProducts = products.filter(
      (product) =>
        product.category
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.title
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase())
    );
    setProducts(updatedProducts);
    inputRef.current.searchItem.value = "";
  };

  return (
    <nav className="Navbar">
      <div className="NavList-left">
        <Link to="/">
          <div className="Logo">Logo</div>
        </Link>
        <ul className="List-left">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>

      <div className="NavList-right">
        <div className="icon">
          <FiSearch />
          <form onSubmit={searchValue} ref={inputRef}>
            <input
              // onChange={searchProduct}
              className="search"
              type="text"
              name="searchItem"
              //name is important for useREf
              placeholder="Search products"
            />
            <button style={{ marginTop: "0" }} type="submit" name="search">
              Search
            </button>
            <button
              style={{ marginTop: "0" }}
              onClick={() => window.location.reload(true)}
            >
              Refresh
            </button>
          </form>
        </div>

        <div>
          {user ? (
            <Link to="/profile">
              <BsFillPersonCheckFill />
              Welcome {user.displayName}
            </Link>
          ) : (
            <Link to="/login">
              <BiLogIn /> Login
            </Link>
          )}
        </div>
        <div>
          <Button variant="light" onClick={handleShow}>
            <GrContact /> Contact
          </Button>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Contact />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Link to="/shoppingBag">
            <FiShoppingCart /> Shopping bag ({quantity})
          </Link>
        </div>
      </div>
    </nav>
  );
}
