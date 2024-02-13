import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import heart from "../assets/whiteheart.png";
import bg1 from "../assets/bg-1.svg";
import { useNavigate } from "react-router-dom";

function Newsletter(props) {
  const navigate = useNavigate();

  const redirectToYourPage = () => {
    // Use the `navigate` function to navigate to the specified route
    navigate("/nextsteps");
  };
  return (
    <>
      <section className="newsletter mt-5">
        <div className="container">
          <div className="row">
          <ParallaxBanner
          layers={[-
            { image: bg1, speed: 10 },
            { image: heart, speed: -10 },
          ]}
          className="aspect-[2/1] main--bg"
        >
          <div className="row latefrww d-flex justify-content-between">
            <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="content">
            <p className="don-t-waste-time-on corppage  nextstrepage">
                  {props.paragraphtext}
                </p>
                <div className="jaquon-hart"><span></span> &nbsp; {props.quotemark} &nbsp; <span></span></div>
            </div>
            </div>
            <div className="col-md-4 group-4">
            
                <h1 className="text-wrapper">Take Action</h1>
                <p className="p">
                  {props.textp}
                </p>

                <button onClick={redirectToYourPage} className="TAKE-THE-NEXT-STEP-wrapper">
                <p className="TAKE-THE-NEXT-STEP">{props.btncon}</p>
              </button>
             
            </div>
          </div>
        </ParallaxBanner>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
