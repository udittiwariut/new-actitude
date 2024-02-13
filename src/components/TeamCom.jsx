import React from "react";
import heidi from "../assets/team/Heidi.webp";
import henry from "../assets/team/Henry.webp";
import jon from "../assets/team/Jon.webp";
import jonas from "../assets/team/Jonas.webp";
import lucas from "../assets/team/Lucas.webp";
import maryam from "../assets/team/Maryam.webp";
import pascal from "../assets/team/Pascal.webp";

function TeamCom(props) {
  return (
    <>
      <section className="teamlist">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <h1 className="my-4">
                {props.heading1}{" "}
                <span className="darkhead">{props.darkhead} </span>
                {props.heading2}
              </h1>

              <p className="paraPag4 fontCls mb-5">
                {" "}
                The team behind Actitude is a group of high-spirited humans
                passionate about encouraging people to care more about the needs
                of the world, take practical action, and achieve real,
                meaningful impact.
              </p>
              <p className="paraPag4 fontCls">
                {" "}
                We are consultants, change makers, communicators, researchers,
                creatives, and  IT-experts, all with the common cause of
                activating and supporting more people in their quest to make the
                world a better place.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-4 card-team">
              <div>
                <img src={henry} alt="" />
              </div>
              <div className="team-info" >
                <h2 className="tean-heading">Henry</h2>
                <hr className="mx-auto" />
                <p>Founder & Catalyst</p>
              </div>
            </div> 

            <div className="col-md-4 card-team">
              <div>
                <img src={pascal} alt="" />
              </div>
              <div  className="team-info">
                <h2 className="tean-heading">Pascal</h2>
                <hr className="mx-auto" />
                <p>Co-Founder & Catalyst</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-5 py-5">
            <div className="col-md-4 card-team">
              <div>
                <img src={heidi} alt="" />
              </div>
              <div className="team-info">
                <h2 className="tean-heading">Heidi</h2>
                <hr className="mx-auto" />
                <p>Corporate volunteer program coordinator</p>
              </div>
            </div>
            <div className="col-md-4 card-team">
              <div>
                <img src={jon} alt="" />
              </div>
              <div className="team-info">
                <h2 className="tean-heading">Jon</h2>
                <hr className="mx-auto" />
                <p>NGO Coordinator & Matchmaker</p>
              </div>
            </div>
            <div className="col-md-4 card-team">
              <div>
                <img src={lucas} alt="" />
              </div>
              <div className="team-info">
                <h2 className="tean-heading">Lucas</h2>
                <hr className="mx-auto" />
                <p>Concept creator & Community Coordinator</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-5">
            <div className="col-md-4 card-team">
              <div>
                <img src={jonas} alt="" />
              </div>
              <div className="team-info">
                <h2 className="tean-heading">Jonas</h2>
                <hr className="mx-auto" />
                <p>Web & database Mastermind</p>
              </div>
            </div>
            <div className="col-md-4 card-team">
              <div>
                <img src={maryam} alt="" />
              </div>
              <div className="team-info">
                <h2 className="tean-heading">Maryam</h2>
                <hr className="mx-auto" />
                <p>Master causes & projects researcher</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TeamCom;
