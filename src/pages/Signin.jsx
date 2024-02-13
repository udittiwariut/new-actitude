import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import img27 from "../assets/images/team/1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    // Your validation logic here

    // Simulating success for now
    alert("Successfully Signup");
  };

  return (
    <section className="signuppage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="imagecapture">
            <img src={img27} alt="" />
            <input type="file" name="" id="" className="fileaccept"/>
            <FontAwesomeIcon icon={faCamera} className="fa-icon" />
            </div>
            <div>
              {/* Placeholder for an image */}
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <h1>Sign Up</h1>
           <div className="row inputoxq">
            <div className="col-md-6">
            <label htmlFor="fname">First Name</label>
            <br />
            <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                onChange={changeHandler}
                value={user.fname}
              />
              {/* Display validation error */}
              <p>{/* Your validation error logic for fname */}</p>
            </div>
            <div className="col-md-6">
            <label htmlFor="lname">Last Name</label>
            <br />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                onChange={changeHandler}
                value={user.lname}
              />
              {/* Display validation error */}
              <p>{/* Your validation error logic for lname */}</p>
            </div>

           </div>

           <div className="row inputoxq">
            <div className="col-md-12">
            <label htmlFor="email">Email Address</label>
              <br />
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={user.email}
              />
              {/* Display validation error */}
              <p>{/* Your validation error logic for email */}</p>
            </div>
           </div>


           <div className="row inputoxq">
            <div className="col-md-12">
            <label htmlFor="password">Password</label>
            <br />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={changeHandler}
                value={user.password}
              />
              {/* Display validation error */}
              <p>{/* Your validation error logic for password */}</p>
            </div>
            

           </div>

           <div className="row inputoxq">
           <div className="col-md-6">
            <label htmlFor="city">City</label>
            <br />
            <input
                type="text"
                name="city"
                id="city"
                placeholder=""
                onChange={changeHandler}
                value={user.cpassword}
              />
              {/* Display validation error */}
              <p>{/* Your validation error logic for cpassword */}</p>
            </div>
           <div className="col-md-6">
            <label htmlFor="country">Country</label>
            <br />
            <Form.Select aria-label="Default select example">
      <option>Select Country</option>
      <option value="1">India</option>
      <option value="2">England</option>
      <option value="3">America</option>
    </Form.Select>
            </div>
           </div>
           

           <div className="row">
            <div className="col-md-12">
              <label htmlFor="Yes"><p>Do you want to receive our newsletter?</p></label>
              
            {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
            </div>
           </div>


             

              

              <button onClick={signupHandler} className="signupbutton">Create Profile</button>
              {/* <NavLink to="/login">Already registered? Login</NavLink> */}
              <br />
              <button className="cancelbutton">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
