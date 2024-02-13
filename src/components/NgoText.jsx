import React from 'react'

const NgoText = (props) => {
  return (
    <section className='NgoText my-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-shadow">
                <div className="frame-14">
            <p className="let-s-help-you">
              <span className="span"> {props.heading1}</span>{" "}
              <span className="text-wrapper-3">{props.darkHeading1}</span>
              <span className="span"> {props.heading11}</span>{" "}
            </p>
            <p className="text-wrapper-400 ngotextss">
            Through the Actitude platform, you can <b>access</b> a network of corporations and individuals quickly and easily. Our volunteers support you in <b>capacity building</b> and <b>project implementation</b> within a broad range of focus areas. This includes everything you might need, such as social media strategy, board effectiveness, project management, research support, fundraising, organizational development, and much more.  

            </p>
           <div className="stepsds">
           <p className="text-wrapper-400 ">
            We know that making the world a better place isn’t easy. 
But with a little help and a strong community, amazing things are possible.
No matter where you are on your journey to help making the world a better place, we're here to help you succeed.
            </p>
            <p className="text-wrapper-400 ">
            Let’s help you determine what support would be most relevant and helpful for you at this point in time. Book a 1:1 conversation with one of our Actitude Catalysts to help you make a solid plan.
            </p>
           </div>
            <div className="TAKE-THE-NEXT-STEP-wrapper"><div class="TAKE-THE-NEXT-STEP">{props.btntext}</div></div>
          </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default NgoText
