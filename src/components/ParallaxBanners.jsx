import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom"; // Make sure to import this
import banner01 from "../assets/Banner/banner01.webp";
import banner02 from "../assets/Banner/banner02.webp";
import banner03 from "../assets/Banner/banner03.webp";
import banner04 from "../assets/Banner/banner04.webp";
import mobbanner1 from "../assets/Banner/banner-mob-1.webp";
import mobbanner6 from "../assets/Banner/banner-mob-6.webp";
import mobbanner4 from "../assets/Banner/banner-mob-4.webp";
import mobbanner5 from "../assets/Banner/banner-mob-5.webp";

const ParallaxBanners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  };

  const navigate = useNavigate();

  const redirectToYourPage = () => {
    // Use the `navigate` function to navigate to the specified route
    navigate("/nextsteps");
  };

  return (
    <ParallaxProvider>
      <Slider {...settings} className="parallax-carousel">
        <div className="carousel-slide">
          <Parallax y={[0, -20]} tagOuter="figure">
            <div
              className="background-image banner"
              style={{ backgroundImage: `url(${banner01})` }}
            />
            <div
              className="background-image mob-banner"
              style={{ backgroundImage: `url(${mobbanner1})` }}
            />
          </Parallax>
          <div className="slide-content">
            <div className="content-text2">
              <p className="there-are-so-many home-page">
                There are so many opportunities
                <br />
                to do good in this world...
              </p>
              <p className="what-difference-do home-title">
                <span className="text-wrapper-8">What difference do</span>
                <br />
                <span className="text-wrapper-3">you</span>
                <span className="text-wrapper-8"> want to make?</span>
              </p>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-15">
                    You want to do good. <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-15">
                    Let’s help you succeed.
                  </span>
                </p>
              </div>
              {/* Fix: Moved onClick directly to the button */}
              <button
                onClick={redirectToYourPage}
                className="TAKE-THE-NEXT-STEP-wrapper"
              >
                <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
              </button>
            </div>
          </div>
        </div>
      

        <div className="carousel-slide">
          <Parallax y={[0, -20]} tagOuter="figure">
            <div
              className="background-image banner"
              style={{ backgroundImage: `url(${banner02})` }}
            />

            <div
              className="background-image mob-banner"
              style={{ backgroundImage: `url(${mobbanner6})` }}
            />
          </Parallax>
          <div className="slide-content">
            <div className="content-text2">
              <p className="there-are-so-many home-page">
                There are so many opportunities
                <br />
                to do good in this world...
              </p>
              <p className="what-difference-do home-title ">
                <span className="text-wrapper-8">What difference do</span>
                <br />
                <span className="text-wrapper-3">you</span>
                <span className="text-wrapper-8"> want to make?</span>
              </p>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-15">
                    You want to do good. <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-15">
                    Let’s help you succeed.
                  </span>
                </p>
              </div>
              <button
                onClick={redirectToYourPage}
                className="TAKE-THE-NEXT-STEP-wrapper"
              >
                <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <Parallax y={[0, -20]} tagOuter="figure">
            <div
              className="background-image banner"
              style={{ backgroundImage: `url(${banner03})` }}
            />

            <div
              className="background-image mob-banner"
              style={{ backgroundImage: `url(${mobbanner4})` }}
            />
          </Parallax>
          <div className="slide-content">
            <div className="content-text2">
              <p className="there-are-so-many home-page">
                There are so many opportunities
                <br />
                to do good in this world...
              </p>
              <p className="what-difference-do home-title">
                <span className="text-wrapper-8">What difference do</span>
                <br />
                <span className="text-wrapper-3">you</span>
                <span className="text-wrapper-8"> want to make?</span>
              </p>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-15">
                    You want to do good. <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-15">
                    Let’s help you succeed.
                  </span>
                </p>
              </div>
              <button
                onClick={redirectToYourPage}
                className="TAKE-THE-NEXT-STEP-wrapper"
              >
                <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <Parallax y={[0, -20]} tagOuter="figure">
            <div
              className="background-image banner"
              style={{ backgroundImage: `url(${banner04})` }}
            />

            <div
              className="background-image mob-banner"
              style={{ backgroundImage: `url(${mobbanner5})` }}
            />
          </Parallax>
          <div className="slide-content">
            <div className="content-text2">
              <p className="there-are-so-many home-page">
                There are so many opportunities
                <br />
                to do good in this world...
              </p>
              <p className="what-difference-do home-title">
                <span className="text-wrapper-8">What difference do</span>
                <br />
                <span className="text-wrapper-3">you</span>
                <span className="text-wrapper-8"> want to make?</span>
              </p>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-15">
                    You want to do good. <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-15">
                    Let’s help you succeed.
                  </span>
                </p>
              </div>
              <button
                onClick={redirectToYourPage}
                className="TAKE-THE-NEXT-STEP-wrapper"
              >
                <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </ParallaxProvider>
  );
};

export default ParallaxBanners;
