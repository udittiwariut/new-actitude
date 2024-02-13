import React from 'react'
import objss from "../img/objects.svg";
import { useNavigate } from 'react-router-dom';

const FourthPart = () => {
  const navigate = useNavigate();

  const redirectToYourPage = () => {
    // Use the `navigate` function to navigate to the specified route
    navigate("/nextsteps");
  };
  return (
    <>
    <section className="volunteer mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                <img className="OBJECTS" src={objss} /> 
                </div>
                <div className="col-md-7">
                <p className="why-should-you">
            <span className="span">Why should</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-3">you</span>
            <br />
            <span className="span">&nbsp;</span>
            <span className="span volunteerCls">
              volunteer?​
              <br />
            </span>
          </p>
          <div className="overlap-22">
            <p className="text-wrapper-21">
              Impactful volunteering is an exciting way to:
            </p>
            <div className="flexcontainer-2 mt-4">
              
              <p className="text-2">
                <span  className="text-wrapper-22">Help </span>
                <span className="text-wrapper-23">
                make the world a better place
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-22">Create more meaning</span>
                <span className="text-wrapper-24"></span>
                <span className="text-wrapper-22"> and </span>
                <span className="text-wrapper-23">purpose</span>
                <span className="text-wrapper-22">
                  {" "}
                  in your life​
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-22">Build </span>
                <span className="text-wrapper-23">deep relationships</span>
                <span className="text-wrapper-22">
                  {" "}
                  and friendships while collaborating with other volunteers​
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-22">Experience exciting new opportunities</span>
                
                <span className="text-wrapper-22">
                  {" "}
                  for learning.​
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-22">Deepen your </span>
                <span className="text-wrapper-23">compassion</span>
                <span className="text-wrapper-22">
                  , care, and kindness
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-22">Increase your </span>
                <span className="text-wrapper-23">well-being</span>
                <span className="text-wrapper-22">​</span>
              </p>
            </div>
            <button onClick={redirectToYourPage} className="TAKE-THE-NEXT-STEP-wrapper desk-btn">
                <p className="TAKE-THE-NEXT-STEP">Take The Next Step</p>
              </button>
          </div>

                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default FourthPart
