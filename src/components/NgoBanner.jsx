
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/scss/navigation';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import img22 from "../assets/Banner/bgngo.svg";
import banner06 from "../assets/Banner/banner06.webp"
import mobbanner3 from "../assets/Banner/banner-mob-3.webp";

const NgoBanner = () => {
    
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
            <div className="background-image banner" style={{ backgroundImage: `url(${banner06})`}} />

            <div className="background-image mob-banner" style={{ backgroundImage: `url(${mobbanner3})`}} />
          </Parallax>
          <div className="slide-content slide-content-ngo">
          <div className="content-text3">
          
            <p className="what-difference-do">
              <span className="text-wrapper-8">Strengthen your <br />  nonprofit’s <br />capacity to </span>
              
              <span className="text-wrapper-3">do good</span>
              
            </p>
            <p className="there-are-so-many">
            Actitude connects you with the volunteers and opportunities that help you make an even bigger difference
            </p>
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-15">
                You’re already doing good.
 <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-15">Let’s help you do better.</span>
              </p>
            </div>
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

export default NgoBanner;