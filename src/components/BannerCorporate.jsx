
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/scss/navigation';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import banner05 from "../assets/Banner/banner05.webp"
// import mobbanner2 from "../assets/Banner/banner-mob-2.png";
import mobbanner2 from "../assets/Banner/mob-banner-2.webp";


const ParallaxBanners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    
  };

  

  return (
    <ParallaxProvider>
      <Slider {...settings} className="parallax-carousel">
        <div className="carousel-slide">
          <Parallax y={[0, -20]} tagOuter="figure">
            <div className="background-image banner" style={{ backgroundImage: `url(${banner05})`}} />

            <div className="background-image mob-banner" style={{ backgroundImage: `url(${mobbanner2})`}} />
          </Parallax>
          <div className="slide-content">
          <div className="content-text2">
          
            <p className="what-difference-do">
              <span className="text-wrapper-8">Corporate Employee</span>
              <br />
              <span className="text-wrapper-3">Volunteer </span>
              <span className="text-wrapper-8">Programs</span>
            </p>
            <p className="there-are-so-many corporate-text">
            Actitude helps set up and strengthen <br />engaging, impactful programs.
            </p>
            <div className="TAKE-THE-NEXT-STEP-wrapper">
              <div className="TAKE-THE-NEXT-STEP">Contact Us</div>
            </div>
          </div>
            
          </div>
        </div>

        
      </Slider>
    </ParallaxProvider>
  );
};

export default ParallaxBanners;