

import "../App.css";
import "../Css/style.css";
import "./Style.css";
import "./StyleGuide.css";
import "./Globals.css";

import { useNavigate } from "react-router-dom";
import SecondPart from "../components/SecondPart";
import Newsletter from "../components/Newsletter";
import FormSec from "../components/FormSec";
import Footer from "../components/Footer";
import BaCorporatenner from "../components/BannerCorporate";
import CorporateContent from "../components/CorporateContent";
import { useEffect } from "react";

function coporate() {
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div style={{ flex: 1 }} className="kennedy-redo corporate-page">
      <BaCorporatenner/>
      <CorporateContent/>

      <SecondPart headingfirst="What causes are your employees most " yellowhead="passionate" headsecond="about?" para="Examples of causes your organization and employees can support"/>

      <Newsletter paragraphtext="74% of employees think that company-sponsored volunteer opportunities provide an improved sense of purpose." quotemark ="(Deloitte Volunteerism Survey, 2017)" btncon="Contact Us" textp="Ready to make it easy for your colleagues to make the world a better place?"/>

     <FormSec/>
     <Footer/>
    </div>
  );
}
export default coporate;
