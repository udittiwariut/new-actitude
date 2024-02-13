
import { useNavigate } from "react-router-dom";
import TeamCom from "../components/TeamCom";
import TeamBanner from "../components/TeamBanner";
import Footer from "../components/Footer";
import { useEffect } from "react";

function OurTeam() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ flex: 1 }} className="kennedy-redo">
      <TeamCom heading1="The" darkhead="Actitude" heading2="Team"/>
      <TeamBanner/>
      <Footer/>
      
      
      
    </div>
  );
}

export default OurTeam;
