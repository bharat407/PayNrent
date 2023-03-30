import { useEffect, useState, createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ServerURL } from "../../Services/FetchNodeServices";
export default function FeaturedComponent(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  var myslider = createRef();
  var images = props.images;

  const playSlide = () => {
    return images.map((item) => {
      return (
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <img
            src={`${ServerURL}/images/${item.image}`}
            style={{ borderRadius: 20, width: 350, height: 190 }}
          />
        </div>
      );
    });
  };
  const handleClickLeft = () => {
    myslider.current.slickPrev();
  };
  const handleClickRight = () => {
    myslider.current.slickNext();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 10,
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: 35,
            fontWight: 800,
            fontFamily: "Arial Black",
            color: "#A8B5C0",
            marginBottom: 10,
          }}
        >
          {props.title}
        </span>
        <span>
          <KeyboardArrowLeftIcon
            style={{ fontSize: 34 }}
            onClick={handleClickLeft}
          />{" "}
          <KeyboardArrowRightIcon
            style={{ fontSize: 34 }}
            onClick={handleClickRight}
          />
        </span>
      </div>
      <Slider ref={myslider} {...settings}>
        {playSlide()}
      </Slider>
    </div>
  );
}
