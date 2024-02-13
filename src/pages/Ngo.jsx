import "../App.css";
import "../Css/style.css";
import "./Style.css";
import "./StyleGuide.css";
import "./Globals.css";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import NgoBanner from "../components/NgoBanner";
import EffectsImage from "../components/EffectsImage";
import MeetTeam from "../components/MeetTeam";
import Newsletter from "../components/Newsletter";
import FormSec from "../components/FormSec";
import Footer from "../components/Footer";
import NgoText from "../components/NgoText";
import NgoContext from "../components/NgoContext";
import { useEffect } from "react";

function Ngo() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ flex: 1 }} className="kennedy-redo ngo-page">
        <NgoBanner />
        <EffectsImage
          heading="How"
          heading2="supports your nonprofit"
          darkHeading="Actitude"
          para={[
            " At Actitude, we want to help your organization get where you're trying to go. We help you set up volunteering opportunities, connect you to the right volunteers with the fitting skills, and accompany you throughout the process to increase your organization's impact.",
          ]}
        />
        <NgoText
          heading1="Why our"
          heading11="matter"
          darkHeading1=" connections"
          btntext="Contact Us"
        />
        <NgoContext />
        <MeetTeam />
        <Newsletter
          paragraphtext="The size of your dreams must always exceed your current capacity to achieve them. If your dreams do not scare you, they are not big enough."
          quotemark="Ellen Johnson Sirleaf"
          btncon="Contact Us"
          textp="Ready to multiply your nonprofit’s impact? We’re here for you."
        />
        <FormSec />
        <Footer />
      </div>
    </>
  );
}

export default Ngo;
