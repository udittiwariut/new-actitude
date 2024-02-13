import React from 'react'
import "../src/pages/Indivisual"
import AppInner from './pages/AppInner';
import "./App.css"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import { useRef } from "react";





const App = () => {
    const ref = useRef(null);
    const options = {
      smooth: true,
    } 
  
  return (
    <>
    
      <main data-scroll-container ref={ref}>
        <section className="intro" data-scroll-section>
          <AppInner/>
        </section>
      </main>
    
    </>
  )
}

export default App;