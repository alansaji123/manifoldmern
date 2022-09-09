import Card from "../../components/Card/card.component";
import "./products.styles.scss";
import Img1 from "../../assets/images/shoe1.png";

function Products() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-12 col-md-6 col-lg-3 my-3">
          <Card
            image={Img1}
            title="Jordan shoes are awesome"
            price={1200}
            rating={4}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-3">
          <Card
            image={Img1}
            title="Jordan shoes are awesome"
            price={1200}
            rating={4}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-3">
          <Card
            image={Img1}
            title="Jordan shoes are awesome"
            price={1200}
            rating={4}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-3">
          <Card
            image={Img1}
            title="Jordan shoes are awesome"
            price={1200}
            rating={4}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-3">
          <Card
            image={Img1}
            title="Jordan shoes are awesome"
            price={1200}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
