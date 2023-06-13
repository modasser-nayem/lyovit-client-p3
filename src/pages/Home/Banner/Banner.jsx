import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// class image
import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.avif";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {
   const Arrow = (props) => {
      let className = props.type === "next" ? "nextArrow" : "prevArrow";
      className += " arrow";
      const char =
         props.type === "next" ? (
            <IoIosArrowForward className="text-3xl md:text-5xl lg:text-6xl" />
         ) : (
            <IoIosArrowBack className="text-3xl md:text-5xl lg:text-6xl" />
         );
      return (
         <span
            className={className}
            onClick={props.onClick}
         >
            {char}
         </span>
      );
   };

   const customPaging = (i) => {
      return (
         <span>
            <RxDotFilled className="text-3xl text-teal-600" />
         </span>
      );
   };

   const appendDots = (dots) => {
      return (
         <div>
            <ul className="flex items-center justify-center">{dots}</ul>
         </div>
      );
   };
   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
   };
   return (
      <div className="cs-container">
         <div className="">
            <Slider
               nextArrow={<Arrow type="next" />}
               prevArrow={<Arrow type="prev" />}
               dots={true}
               customPaging={customPaging}
               appendDots={appendDots}
               {...settings}
            >
               <img
                  className="max-h-[450px]"
                  src={img1}
                  alt=""
               />
               <img
                  className="max-h-[450px]"
                  src={img2}
                  alt=""
               />
               <img
                  className="max-h-[450px]"
                  src={img3}
                  alt=""
               />
            </Slider>
         </div>
      </div>
   );
};

export default Banner;
