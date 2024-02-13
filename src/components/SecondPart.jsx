import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlides from "./SwiperSlides";


// import required modules


const SecondPart = (props) => {
  return (
    <>
      <div className="container pt-3">
        <div className="frame-20 mt-5">
          <p className="what-causes-are-you">
            <span className="span">
              {props.headingfirst}
            </span>
            <span className="text-wrapper-3">{props.yellowhead} </span>
            <span className="span">{props.headsecond}</span>
          </p>
          <p className="text-wrapper-25">{props.para}</p>
        </div>

        
      </div>
      <SwiperSlides/>
    </>
  );
};

export default SecondPart;
