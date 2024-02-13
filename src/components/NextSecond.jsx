import React from 'react'
import secondimg from "../assets/nextsecond.svg";
import mobstep from "../assets/mobstep.png";

const NextSecond = () => {
  return (
    <>
    <section className="nextsec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1><span className='text-wrapper-3'>Your</span> Impact Journey</h1>
                    <h3 className='text-center'>Actitude Catalysts support you through each activation and impact stage</h3>
                    <img className='desktop-img' src={secondimg} alt=""/>
                    <img className='mob-img' src={mobstep} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NextSecond
