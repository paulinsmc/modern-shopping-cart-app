import "../App.css";
import { BsFillCartFill } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import CartList from "./CartList";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <nav
        style={{ backgroundColor: "#9b0e44" }}
        className="navbar container text-white p-3"
      >
        <div className="logo">
          <Link to="/">Ecommerce App</Link>
        </div>
        <div onClick={handleShow} className="cart">
          <BsFillCartFill />
          <sup className="cart-value">{cart.length}</sup>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {cart.length === 0 ? (
            <Modal.Title>There is no products selected</Modal.Title>
          ) : (
            <Modal.Title>
              List of Selected Products<br></br>
              <div>
                {" "}
                <span style={{ color: "#9b0e44" }}>
                  Cart Items: {cart.length}
                </span>
                <br></br>
                <span style={{ color: "teal" }}>
                  Total Price:{" "}
                  {cart
                    .map((x) => x.price * x.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toFixed(2)}
                </span>
              </div>
            </Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <CartList />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
