import React, { useEffect } from "react";
import "../App.css";
import "../Css/style.css";
import "./Style.css";
import "./StyleGuide.css";
import "./Globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SecondPart from "../components/SecondPart";
import ThirdPart from "../components/ThirdPart";
import FourthPart from "../components/FourthPart";
import MeetTeam from "../components/MeetTeam";
import Newsletter from "../components/Newsletter";
import FormSec from "../components/FormSec";
import Footer from "../components/Footer";
import EffectsImage from "../components/EffectsImage";
import ParallaxBanners from "../components/ParallaxBanners";

function Page1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kennedy-redo indivisual-page">
      <ParallaxBanners />

      {/* <Banner /> */}
      <SecondPart
        headingfirst="What causes are you most passionate to "
        yellowhead="take action"
        headsecond="on?"
        para="Examples of causes you can support"
      />
      <ThirdPart />
      {/* <EffectsImage
        heading="Let’s help you"
        darkHeading="connect"
        para="At Actitude, we connect you with the right NGOs, causes, and
               projects to make the world a better place. We help match the need
              for support with the desire to help, knowing that with a little
              help and a strong community, it really is possible to make a
              difference in our world."
      /> */}
      <EffectsImage
        heading="Let’s help you"
        darkHeading="connect"
        para={
          <>
            At Actitude, we connect you with the right NGOs, causes, and
            projects to{" "}
            <span className="connect-bold">
              make the world a better place.{" "}
            </span>{" "}
            We help match the need for support with the desire to help, knowing
            that with a little help and a strong community, it
            <span className="connect-bold"> really is possible </span>to make a
            difference in our world.
          </>
        }
      />
      <FourthPart />
      <MeetTeam />
      <Newsletter
        paragraphtext="Vision without action is merely a dream  Action without vision
                  just passes the time  Vision with action can change the world."
        quotemark="Joel L. Barker"
        btncon="Take The Next Step"
        textp="Are you ready to make a difference? We’re here to support you."
      />

      <FormSec />
      <Footer />
    </div>
  );
}
export default Page1;
