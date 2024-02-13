import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import user1 from "../assets/images/team/1.svg";
import user2 from "../assets/images/team/2.svg";
import user3 from "../assets/images/team/3.svg";
import TeamSlider from './TeamSlider';

const MeetTeam = () => {
  return (
    <>
     <section className="teammanger mt-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="group-18">
            <p className="meet-our-actitude">
              <span className="span">Meet our Actitude </span>{" "}
              <span className="text-wrapper-3">volunteers</span>
            </p>
            <p className="meet-a-few-of-our">
              Meet a few of our volunteers, activated and engaged
          
              in the causes they’re most passionate about ...
            </p>
            
          </div>
                </div>
            </div>
        </div>

        <TeamSlider/>
     </section>
    
    </>
  )
}

export default MeetTeam
