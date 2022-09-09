import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import Button from "../Button/button.component";
import "./card.style.scss";

function Card({ image, title, price, rating }) {
  return (
    <div className="card__wrapper shadow shadow-sm py-3 border">
      <div className="card__img_wrapper">
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div className="text-center">{title}</div>
      <div className="text-primary text-center d-flex align-items-center justify-content-center mt-1">
        <BiRupee />
        {price}
      </div>
      <div className="d-flex align-items-center justify-content-center gap-1 mt-1">
        {rating &&
          rating > 0 &&
          Array.apply(null, Array(rating)).map((item, index) => {
            return <AiFillStar style={{ color: "gold" }} />;
          })}
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <Button variant="secondary">Add to cart</Button>
      </div>
    </div>
  );
}

export default Card;
