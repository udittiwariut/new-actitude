import React, { useEffect } from "react";
import NextFirst from "../components/NextFirst";
import NextSecond from "../components/NextSecond";
import NgoText from "../components/NgoText";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import NextAccord from "../components/NextAccord";

const NextSteps = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="kennedy-redo nextsteps">
        <NextFirst />
        <NextSecond />
        <NgoText
          heading1="How"
          heading11=" can support you"
          darkHeading1="Actitude "
          btntext="BOOK CONVERSATION"
        />

        <NextAccord />
        <Newsletter
          paragraphtext="If not us, then who? If not now, then when? Every scar and bruise was a badge of Honor. Our Struggle is the Struggle of a lifetime. Never ever be afraid to make some noise and get in good trouble, necessary trouble."
          quotemark="John Lewis"
          btncon="Contact Us"
          textp="We love that you want to do good.
We know it’s not easy.
We’ll help you take action."
        />
        <Footer />
      </main>
    </>
  );
};

export default NextSteps;
