import React from "react";
import obj11 from "../assets/icons/vector.svg";

const NgoContext = () => {
  return (
    <>
      <section className="ngocontext my-5 pt-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <h1 className="span">
                What we
                <span className="text-wrapper-3"> offer </span>
                your <br /> nonprofit
              </h1>

              <div className="overlap-22">
                <p className="text-wrapper-21">
                  Engaging volunteers through Actitude is a powerful way to:
                </p>
                <ul className="nglist">
                  <li>
                    Create relevant, impactful <b className="text-wrapper-23">volunteer opportunities</b> for
                    skilled and hands-on volunteers
                  </li>
                  <li>
                    <b className="text-wrapper-23">Implement</b> projects for which you wouldn't normally have the
                    resources
                  </li>
                  <li>
                    <b className="text-wrapper-23">Attract</b> and <b className="text-wrapper-23">recruit </b>suitable, motivated volunteers for your
                    NGOs needs
                  </li>
                  <li>
                    <b className="text-wrapper-23">Get support</b> in engaging, preparing, and managing your
                    volunteers
                  </li>
                </ul>

                <div className="frame-19">
                  <div className="text-wrapper-2">CONTACT US</div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img className="OBJECTS11" src={obj11} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NgoContext;
