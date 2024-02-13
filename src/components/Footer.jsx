import React from 'react'
import logo1 from "../assets/images/logo/logoSvg.svg";

function Footer() {
  return (
    <>
    <footer className='Footermain'>
        <div className="container">
            <div className="row first-row">
                <div className="col-md-12">
                    <h1>About Actitude</h1>
                    <p>We help activate and support people to make the world a better place,
turning the positive intention to make a difference into impactful, practical action.
Actitude is a non-profit organization founded in Copenhagen, Denmark in 2018.
</p>

                </div>
            </div>
            <div className="row second-row">
                <div className="col-md-6">
                <img className="horizontal-logo-2" src={logo1} />
                </div>
                <div className="col-md-3">
                
                        <div className="text-wrapper-34">www.actitude.com</div>
                        <div className="text-wrapper-34">info@actitude.com</div>
                        <div className="text-wrapper-34">+45 35851000</div>
                      
                </div>
                <div className="col-md-3">
               
                          <div className="text-wrapper-34">
                            Rosenørns Allé 44, st. tv.
                          </div>
                        
                
                        <div className="text-wrapper-34">
                          1970 Frederiksberg
                        </div>
                        <div className="text-wrapper-34">Copenhagen</div>
                        <div className="text-wrapper-34">Denmark</div>
                        
                      
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;
