import { useState } from "react";
import ProductItem from "./ProductItem";
import productsData from "../../data.json";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const NextBtn = ({ onClick }) => {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

const PrevBtn = ({ onClick }) => {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products] = useState(productsData);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <Slider {...settings}>
            {products.map((product) => (
              <ProductItem productItem={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
