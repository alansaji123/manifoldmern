import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/home.styles.scss";
import Img1 from "../assets/images/shoe1.jpg";
import { BsArrowRight } from "react-icons/bs";
import Button from "../components/Button/button.component";
import Card from "../components/Card/card.component";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="home__wrapper row">
      <div className="container-fluid container-xxl bg-color-bg">
        <Carousel responsive={responsive}>
          <div className="home__carousel_item">
            <div className="home__carousel_container d-flex align-items-center justify-content-between mx-auto gap-3">
              <div className="home__carousel_text">
                <h1 className="text-primary">New Arrivals</h1>
                <div className="text-dark text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                  tempora. Eius, quas corrupti nulla quam quos sunt voluptate
                  vero provident quo, minus ullam ipsum cupiditate non
                  aspernatur porro deleniti animi.
                </div>
                <Button className="text-primary text-sm mt-3" variant="link">
                  <span>View Collection</span>
                  <BsArrowRight className="ms-2" />
                </Button>
              </div>
              <img className="home__carousel_img" src={Img1} alt="shoe" />
            </div>
          </div>
          <div className="home__carousel_item">
            <div className="home__carousel_container d-flex align-items-center justify-content-between mx-auto gap-3">
              <div className="home__carousel_text">hello</div>
              <img className="home__carousel_img" src={Img1} alt="shoe" />
            </div>
          </div>
          <div className="home__carousel_item">
            <div className="home__carousel_container d-flex align-items-center justify-content-between mx-auto gap-3">
              <div className="home__carousel_text">hello</div>
              <img className="home__carousel_img" src={Img1} alt="shoe" />
            </div>
          </div>
          <div className="home__carousel_item">
            <div className="home__carousel_container d-flex align-items-center justify-content-between mx-auto gap-3">
              <div className="home__carousel_text">hello</div>
              <img className="home__carousel_img" src={Img1} alt="shoe" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mt-5 mb-5">
        <h2 className="text-dark text-center">Our Collections</h2>
        <div className="text-sm home__sub_text_container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          temporibus aut necessitatibus mollitia voluptates perferendis.
        </div>
        <div>Filter Section</div>
        <div className="mt-5 container mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
