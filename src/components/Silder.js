import Slider from "react-slick";
import React from "react";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const Silder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider max-w-[1300px] mx-auto mt-4 mobile-slider">
      <Slider {...settings}>
        <div className="slider__item">
          <img
            src="https://thumbs.dreamstime.com/b/baby-clothes-banner-sky-26866987.jpg"
            alt=""
          />
        </div>
        <div className="slider__item">
          <img
            src="https://previews.123rf.com/images/svetichch/svetichch1901/svetichch190100232/115725732-sale-banner-fashion-store-fashionable-womens-clothing-and-accessories-with-a-black-friday-banner-for.jpg?fj=1"
            alt=""
          />
        </div>
        <div className="slider__item">
          <img
            src="https://i.pinimg.com/originals/5c/7a/51/5c7a515af18946223d48e930e4763508.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Silder;
