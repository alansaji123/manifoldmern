import React from "react";
import "./button.styles.scss";

function Button({ children, className, variant = "primary" }) {
  let variantClassName = "";
  if (variant === "primary") {
    variantClassName = "sc__btn_primary";
  }
  if (variant === "link") {
    variantClassName = "sc__btn_link";
  }

  return (
    <button className={`${className} sc__btn ${variantClassName}`}>
      {children}
    </button>
  );
}

export default Button;
