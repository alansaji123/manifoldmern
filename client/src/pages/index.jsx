import React, { useContext, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/home.styles.scss";
import Img1 from "../assets/images/shoe1.png";
import Img2 from "../assets/images/shoe2.png";
import Img3 from "../assets/images/shoe3.png";
import Img4 from "../assets/images/shoe4.png";
import { BsArrowRight } from "react-icons/bs";
import Button from "../components/Button/button.component";
import Card from "../components/Card/card.component";
import { ROUTES } from "../routes/index";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const { cartItems, addItemToCart } = useContext(CartContext);
  const [existingCartItemsArray, setExistingCartItemsArray] = useState([]);

  console.log("cart items : ", cartItems);

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

  const getExistingCartArray = (items) => {
    let tmpArr = [];
    if (items && items.length > 0) {
      items.forEach((item, index) => {
        tmpArr.push(item.id);
      });
    }
  };

  useEffect(() => {
    if (cartItems) {
      getExistingCartArray(cartItems);
    } else {
      setExistingCartItemsArray([]);
    }
  }, [cartItems]);

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
              <img className="home__carousel_img" src={Img2} alt="shoe" />
            </div>
          </div>
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
              <img className="home__carousel_img" src={Img3} alt="shoe" />
            </div>
          </div>
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
              <img className="home__carousel_img" src={Img4} alt="shoe" />
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
        <div className="mt-5 container mx-auto">
          <div className="row">
            <div className="col-12">
              <div>Filter Section</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 my-2">
              <Card
                image={Img1}
                title={`Jordan Premium Shoe 11`}
                price={1200}
                rating={4}
                onAction={() => {
                  addItemToCart({
                    name: "hello",
                    quantity: 1,
                    id: "001",
                    price: 100,
                  });
                }}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-3 my-2">
              <Card
                image={Img2}
                title={`Jordan Premium Shoe`}
                price={1200}
                rating={4}
                onAction={() => {
                  console.log("adding item");
                  addItemToCart({
                    name: "hello",
                    quantity: 1,
                    price: 100,
                    id: "002",
                  });
                }}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-3 my-2">
              <Card
                image={Img3}
                title={`Jordan Premium Shoe`}
                price={1200}
                rating={4}
                onAction={() => {
                  console.log("adding item");
                  addItemToCart({
                    name: "hello",
                    quantity: 1,
                    price: 200,
                    id: "003",
                  });
                }}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-3 my-2">
              <Card
                image={Img4}
                title={`Jordan Premium Shoe`}
                price={1200}
                rating={4}
                onAction={() => {
                  console.log("adding item");
                  addItemToCart({
                    name: "hello",
                    quantity: 1,
                    price: 200,
                    id: "004",
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-5">
              <Link to={ROUTES.PRODUCTS}>
                <Button variant="primary" className="px-5">
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 bg-color-bg py-4">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap">
            <div className="w-50">
              <div className="text-4xl text-primary font-semibold">
                2016 Nike
              </div>
              <div className="text-4xl text-primary font-semibold">
                The Best Classical
              </div>
              <div className="mt-1">
                <span className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum voluptatibus atque laborum repellat mollitia fugiat,
                  velit eligendi hic temporibus, quidem possimus quod tempora
                  nesciunt dicta omnis voluptate assumenda! Iure, quaerat.
                </span>
              </div>
            </div>
            <div className="w-50">
              <img className="img-fluid" src={Img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
