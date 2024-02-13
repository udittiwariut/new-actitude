import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
// import img33 from "../assets/bg-new.png"
import img33 from "../assets/Banner/bg-new-1.svg";
import mobbanner1 from "../assets/Banner/mob-bg-1.png";

const CorporateContent = () => {
  return (
    <>
    <ParallaxBanner
      layers={[
        { image: img33, speed: -70, className: "desktop-layer" },
        { image: mobbanner1, speed: -50, className: "mobile-layer" },

      ]}
      className="aspect-[2/1]"
    >
 <section className="content-cor">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h1>
                How we <span className="text-wrapper-3">support</span> your
                organization
              </h1>
              <p>
                We help you <span className="text-bold"><b>develop</b></span> and{" "}
                <span className="text-bold"><b>expand</b></span> your corporate
                employee volunteer initiative. We make your life easier, because
                while your company and certain nonprofits can contact each other
                directly, our platform enables{" "}
                <span className="text-bold"><b>quicker, easier access</b></span> to a
                wider network of nonprofits.
              </p>

              <ul className="list-type">
                <li>We <b>consult</b> on the design of your program.</li>
                <li>We help <b>select causes</b> ​for your program to support​</li>
                <li>
                  We activate and engage your employees​ through <b>presentations</b>, 
                  <b> workshops</b>, and individual <b>coaching</b> conversations
                </li>
                <li>
                  We help create meaningful <b>volunteer opportunities</b> for your
                  employees with local and international nonprofits
                </li>
              </ul>
              <div class="TAKE-THE-NEXT-STEP-wrapper"><div class="TAKE-THE-NEXT-STEP">Contact Us</div></div>
            </div>
            <div className="col-md-1"></div>
          </div>
         
          <div className="row mid-row ">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h1>
              Benefits for  <span className="text-wrapper-3">your Corporation</span>
              </h1>
              <h4>Corporate Employee Volunteer Programs are a powerful way to:​​​</h4>

              <ul className="list-type">
                <li>Increase employee <b>engagement</b> </li>
                <li><b>​Strengthen your brand</b> as an employer of choice in recruitment and retainment ​</li>
                <li>
                ​Create new opportunities for <b>personal and professional development</b>
                </li>
                <li>
                Increase <b>team spirit</b>
                </li>
                <li>Bring your Corporate Social Responsibilities to life and <b>reach your CSR goals</b> ​</li>
              </ul>
              <div class="TAKE-THE-NEXT-STEP-wrapper"><div class="TAKE-THE-NEXT-STEP">Contact Us</div></div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row my-5 pt-2 pb-5">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h1>
              Benefits for  <span className="text-wrapper-3">your employees</span>
              </h1>
              <h4>People who serve as volunteers enjoy:​​</h4>

              <ul className="list-type">
                <li>Increase <b>well-being</b></li>
                <li>Increased <b>meaning</b> and <b>purpose</b> through helping people and the planet​</li>
            
                <li>
                <b>Strong relationships</b> and friendships when collaborating closely with colleagues, NGOs, and others
                </li>
                <li>Exciting <b>new opportunities</b> for learning and practicing important competencies</li>
              </ul>
              <div class="TAKE-THE-NEXT-STEP-wrapper"><div class="TAKE-THE-NEXT-STEP">Contact Us</div></div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      </ParallaxBanner>
    </>
  );
};

export default CorporateContent;
