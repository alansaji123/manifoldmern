import React from "react";
import "./button.styles.scss";

function Button({
  children,
  className,
  variant = "primary",
  onClick,
  ...rest
}) {
  let variantClassName = "";
  if (variant === "primary") {
    variantClassName = "sc__btn_primary";
  }
  if (variant === "link") {
    variantClassName = "sc__btn_link";
  }
  if (variant === "secondary") {
    variantClassName = "sc__btn_secondary";
  }

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${className} sc__btn ${variantClassName}`}
    >
      {children}
    </button>
  );
}

export default Button;
