import React, { useContext, useState } from "react";
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
  const [show, setShow] = useState(false);
  const { user, quantity, setQuantity } = useContext(MyContext);
  console.log(quantity);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <FiSearch /> <input type="text" placeholder="Search products" />
        </div>

        <div>
          {user ? (
            <Link to="/profile">
              <BsFillPersonCheckFill />
              Profile
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
            <FiShoppingCart /> Shopping bag {quantity}
          </Link>
        </div>
      </div>
    </nav>
  );
}
