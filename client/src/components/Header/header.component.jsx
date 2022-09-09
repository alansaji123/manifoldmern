import { useState, useEffect } from "react";
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

function Header() {
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
              <div className="text-base my-3 d-flex gap-3 align-items-center">
                <AiOutlineHome className="text-xl" />
                Home
              </div>
              <div className="text-base my-3 d-flex gap-3 align-items-center">
                <BsBagCheck className="text-xl" />
                All Products
              </div>
              <div className="text-base my-3 d-flex gap-3 align-items-center">
                <IoLogOutOutline className="text-xl" />
                Logout
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="header__logo">Shoe Cart</div>
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative header__cart_dropdown">
            <div className="header__badge">1</div>
            <Dropdown>
              <Dropdown.Toggle as="div" id="dropdown-cart">
                <AiOutlineShoppingCart className="header__icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "450px" }}>
                <div className="d-flex align-items-center px-3">
                  <span className="text-primary font-normal text-xs w-50">
                    Product Name
                  </span>
                  <span className="text-primary font-bold w-50">
                    <input type="text" />
                  </span>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="header__dropdown_wrapper">
            <Dropdown>
              <Dropdown.Toggle as="div" id="dropdown-profile">
                <FaUserCircle />
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
