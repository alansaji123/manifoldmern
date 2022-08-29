import React from "react";
import "./header.styles.scss";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

function Header() {
  return (
    <div className="header__wrapper d-flex">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <AiOutlineMenu className="header__icon" />
        </div>
        <div className="header__logo">Shoe Cart</div>
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative">
            <div className="header__badge">1</div>
            <AiOutlineShoppingCart className="header__icon" />
          </div>
          <div>
            <AiOutlineSearch className="header__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
