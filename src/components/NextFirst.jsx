import React from 'react'
// import nextimg from "../assets/nextfirst.svg"
import nextimg from "../assets/nextfirst-cropped.svg"
const NextFirst = () => {
  return (
    <>
    <section className="ngofirst">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Take the Next <span className='text-wrapper-3'>Step</span></h1>
                    <h3 className='w-85 nexth3 mt-3'>Let’s help you accelerate your journey towards doing good </h3>
                    <p className="mt-5">
                    At Actitude, we’re excited to support you in taking the next step. You may still be considering exploring how to best get started. Or you may be an experienced volunteer with years of experience and impact.
                    </p>
                    <img src={nextimg} alt=""  className='mobileimg' />
                    <h3 className='w-85 nexth3 mt-3 mob-banner'>Let’s explore your next steps together</h3>
                    <ul>
                        <li>Are you <b className='text-wrapper-23'>curious</b> to explore if helping make the world a better place is for you? </li>
                        <li>Perhaps you want to engage, but haven’t yet found the <b className='text-wrapper-23'>causes</b> you’re most passionate about or where to engage? </li>
                        <li>Need some help <b className='text-wrapper-23'>identifying</b> the right volunteering opportunity for you? </li>
                        <li>Are you already having an impact, but want to further <b className='text-wrapper-23'>scale</b> or replicate your impact?</li>
                    </ul>
                    <p className='mt-4 bottom-space'>We know it’s not always easy to make the world a better place. We’re excited to guide and support you at all stages of your impact journey.</p>
                    <div class="TAKE-THE-NEXT-STEP-wrapper"><div class="TAKE-THE-NEXT-STEP">Contact Us</div></div>
                </div>
                <div className="col-md-6">
                    <img src={nextimg} alt=""  className='deskimg' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NextFirst
