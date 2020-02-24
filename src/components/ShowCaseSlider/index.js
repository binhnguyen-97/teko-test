import React from "react";
import Slider from "react-slick";
import isEmpty from 'lodash.isempty';

const ShowCaseSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const renderSlideImages = images => {
    let listImage = [];
    if(isEmpty(images)) return listImage;
    images.map((img, index) => {
      return listImage = [...listImage,<div className="slide" key={`image_${index}`}>
        <img src={img.url} alt="product" className="slide__image"/>
      </div>]
    })
    return listImage;
  }
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {renderSlideImages(images)}
      </Slider>
    </div>
  );
}
export default ShowCaseSlider;
