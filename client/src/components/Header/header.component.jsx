import { useState, useEffect, useContext } from "react";
import "./header.styles.scss";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineHome,
} from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header__wrapper d-flex">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <AiOutlineMenu onClick={handleShow} className="header__icon" />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header as="div" closeButton={true}>
              <Offcanvas.Title className="header__logo text-3xl font-medium">
                Shoe Cart
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={ROUTES.HOME} onClick={() => setShow(false)}>
                <div className="text-base my-3 d-flex gap-3 align-items-center text-secondary header__link">
                  <AiOutlineHome className="text-xl" />
                  Home
                </div>
              </Link>
              <Link to={ROUTES.PRODUCTS} onClick={() => setShow(false)}>
                <div className="text-base my-3 d-flex gap-3 align-items-center text-secondary">
                  <BsBagCheck className="text-xl" />
                  All Products
                </div>
              </Link>
              <Link to="/" onClick={() => setShow(false)}>
                <div className="text-base my-3 d-flex gap-3 align-items-center text-secondary">
                  <IoLogOutOutline className="text-xl" />
                  Logout
                </div>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="header__logo">Shoe Cart</div>
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative header__cart_dropdown">
            <Link to={ROUTES.CART}>
              <div className="header__badge">{cartItems?.length}</div>
              <AiOutlineShoppingCart className="header__icon text-secondary" />
            </Link>
          </div>
          <div className="header__dropdown_wrapper">
            <Dropdown>
              <Dropdown.Toggle as="div" id="dropdown-profile">
                <FaUserCircle className="text-secondary text-2xl" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
