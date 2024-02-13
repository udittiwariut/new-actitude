import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import heart from "../assets/whiteheart.png";
import bg1 from "../assets/bg-1.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TeamBanner() {
  return (
    <>
      <section className="newsletter mt-5">
        <div className="container">
          <div className="row">
            <ParallaxBanner
              layers={[
                { image: bg1, speed: 30 },
                { image: heart, speed: -30 },
              ]}
              className="aspect-[2/1] main--bg"
            >
              <div className="row latefrww11">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                  <div className="bannercontects">
                    <h1>
                      <span>Join</span> the Actitude team
                    </h1>
                    <h4>
                      We’d love for you to join our team and be part of our
                      community.
                    </h4>
                    <p>We are currently looking for:</p>
                    <ul className="teamlistd">
                      <li>
                        <b>Catalysts</b> to activate and support individual
                        volunteers
                      </li>
                      <li>
                        <b>Specialists</b> in specific countries, regions, and
                        causes
                      </li>
                      <li>
                        <b>Social media experts</b>
                      </li>
                      <li>
                        Experts in <b>volunteer engagement</b> and community
                        building
                      </li>
                      <li>
                        <b>Advisory board members</b> passionate to help us
                        develop Actitude
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 group-4">
                  <p className="p">
                    Interested in joining our team? Share your contact
                    information here, and let’s start a dialogue.
                  </p>

                  <Form className="">
                    <Form.Group
                      className="mb-3 breakiog"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="email" placeholder="Optional" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 breakiog"
                      controlId="exampleForm.ControlInput3"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="" required />
                    </Form.Group>
                    <div className="button-box d-flex justify-content-center">
                      <Button
                        variant="primary"
                        className="form-submit"
                        type="submit"
                      >
                        Send
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </ParallaxBanner>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamBanner;
