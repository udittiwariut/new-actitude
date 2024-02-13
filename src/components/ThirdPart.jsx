import React from "react";
import { useNavigate } from "react-router-dom";

const ThirdPart = () => {
  const navigate = useNavigate();

  const redirectToYourPage = () => {
    // Use the `navigate` function to navigate to the specified route
    navigate("/nextsteps");
  };
  return (
    <>
      <section className="third-part">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <div className="overlap-2">
                <p className="what-are-your">
                  <span className="span">What are your </span>{" "}
                  <span className="text-wrapper-3">burning questions?</span>
                </p>
                <p className="text-wrapper-4">
                  Actitude will help you find answers.
                </p>
                <div className="frame-6">
                  <ul className="mainsg">
                    <li>
                      {" "}
                      <p className="what-cause-do-i-want">
                        <span className="text-wrapper-5">What </span>
                        <span className="text-wrapper-6">cause</span>
                        <span className="text-wrapper-5">
                          {" "}
                          do I want to support?
                        </span>
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="div-2">
                        <span className="text-wrapper-6">Where</span>{" "}
                        <span className="text-wrapper-7"> in the world?</span>
                      </p>
                    </li>
                    <li>
                      <p className="div-3">
                        <span className="text-wrapper-7">
                          Who or what is my{" "}
                        </span>
                        <span className="text-wrapper-6">focus</span>
                        <span className="text-wrapper-7">?</span>
                      </p>
                    </li>
                    <li>
                      <p className="div-2">
                        <span className="text-wrapper-6">How</span>{" "}
                        <span className="text-wrapper-7">
                          {" "}
                          can I best contribute?
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="div-2">
                        <span className="text-wrapper-6">Who else</span>
                        <span className="text-wrapper-7">
                          {" "}
                          is actively engaged in this cause?
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="div-3">
                        <span className="text-wrapper-7">Am I </span>
                        <span className="text-wrapper-6">ready</span>
                        <span className="text-wrapper-7">
                          {" "}
                          to take action?{" "}
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-end">
              <div className="box111">
                <p className="desk-font">
                  We guide and support you for free, whether you’re just
                  starting out or you simply need direction.
                </p>
                <button
                  onClick={redirectToYourPage}
                  className="TAKE-THE-NEXT-STEP-wrapper"
                >
                  <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdPart;
