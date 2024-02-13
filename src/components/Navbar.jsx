import React, { useEffect, useRef, useState } from "react";
import logo1 from "../assets/images/logo/logoSvg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import imgF from "../assets/images/icons/1.svg";
import imgF2 from "../assets/images/icons/2.svg";
import imgF3 from "../assets/images/icons/3.svg";
import imgF4 from "../assets/images/icons/4.svg";
import menuimg from "../assets/menuimg.png";
import menuicon from "../assets/menu.png";
import Sidebar from "./Sidebar";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownItem, DropdownToggle, Form } from "react-bootstrap";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import usericon from "../assets/Banner/user-icon.png";
import usericon_orange from "../assets/Banner/user-circle-orange.png";
import facebook from "../assets/Banner/facebook.svg";
import linkedin from "../assets/Banner/linkedin.svg";
import crossicon from "../assets/Banner/crossicon.svg";
import useOutSideToClose from "../hooks/useOutSideToClose";

const Navbar = () => {
  const dropDownToggel = useRef(null);
  const dropDownToggelTriggerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(dropDownToggel.current);
  }, [dropDownToggel.current]);

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    console.log(window.location.pathname);
    setShowDropdowUserIcon(false);
  }, [window.location.pathname]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdowUserIcon, setShowDropdowUserIcon] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  const redirectToSignup = () => {
    navigate("/signin");
    setShowDropdown(false);
    setShowDropdowUserIcon(false);
  };

  useOutSideToClose({
    ref: dropDownToggel,
    triggerRef: dropDownToggelTriggerRef,
    close: () => setShowDropdowUserIcon(false),
  });

  return (
    <>
      <header className={cls}>
        <div className=" container-fluid kennedy-redo kennedy-redo2">
          <div className="navbar">
            <div className="frame-8">
              <div className="navbard">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {/* <div className="group-menu"> */}
                    <div
                      className={`group-menu ${
                        !showDropdown ? "active-dropdown" : ""
                      }`}
                    >
                      <div className="rectangle-3 colord"></div>
                      <div className="rectangle-3 colord"></div>
                      <div className="rectangle-3 colord"></div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="custom-dropdown-menu "
                    show={showDropdown}
                    onClick={() => setShowDropdown(false)}
                  >
                    <ul className="d-flex">
                      <Dropdown.Item>
                        <NavLink
                          to="/"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>INDIVIDUAL VOLUNTEERING</li>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/corporate"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>CORPORATE VOLUNTEER PROGRAMS</li>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        {" "}
                        <NavLink
                          to="/ngo"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>NGOS LOOKING FOR VOLUNTEERS</li>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/ourteam"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>THE ACTITUDE TEAM</li>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/nextsteps"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li className="specific">YOUR NEXT STEPS</li>
                        </NavLink>
                      </Dropdown.Item>
                      {/* <Dropdown.Item>
                        <NavLink
                          to="/signin"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>SIGN UP</li>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/profile"
                          onClick={closeDropdown}
                          className="menulink"
                        >
                          <li>PROFILE</li>
                        </NavLink>
                      </Dropdown.Item> */}
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Link to="/">
                <img className="horizontal-logo" src={logo1} />
              </Link>
            </div>
            <div className="frame-9">
              <NavLink to="/" className="individuals">
                <img className="menu-image" src={menuimg} />
                <p className="text-wrapper-9">
                  INDIVIDUAL <br />
                  VOLUNTEERING
                </p>
              </NavLink>
              <NavLink to="/corporate" className="individuals">
                <img className="menu-image" src={imgF2} />
                <p className="text-wrapper-9">
                  CORPORATE EMPLOYEE <br />
                  VOLUNTEER PROGRAMS
                </p>
              </NavLink>
              <NavLink to="/ngo" className="individuals">
                <img className="menu-image" src={imgF3} />
                <p className="text-wrapper-9">
                  NGOS LOOKING <br />
                  FOR VOLUNTEERS
                </p>
              </NavLink>
              <Dropdown ref={dropDownToggel} show={showDropdowUserIcon}>
                <DropdownToggle
                  className="user-icon-dropdown-toggel"
                  ref={dropDownToggelTriggerRef}
                  onClick={() => setShowDropdowUserIcon(!showDropdowUserIcon)}
                >
                  <img alt="User Icon" className="user-icon" />
                </DropdownToggle>
                <Dropdown.Menu
                  className="custom-dropdown-menu"
                  show={setShowDropdowUserIcon}
                >
                  <section className="droploginpage">
                    <img src={crossicon}
                     alt=""
                     onClick={() => setShowDropdowUserIcon(!showDropdowUserIcon)} 
                     className="crossicon" />

                    <h3>
                      Log in to your
                      <span> Actitude</span> account
                    </h3>
                    <form action="">
                      <div className="inputvox">
                        <label htmlFor="email">Email Address</label>
                        <br />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                        {/* Display validation error */}
                        <p>{/* Your validation error logic for email */}</p>
                      </div>

                      <div className="inputvox">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                        />
                        {/* Display validation error */}
                        <p>{/* Your validation error logic for password */}</p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="dsfsc">
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                              <Form.Check
                                inline
                                label="Remember Me"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                            </div>
                          ))}
                        </div>
                        <span className="forget-text">Forgot password</span>
                      </div>
                      <button className="loginbutton">Login</button>
                      <hr />
                      <button className="facebooklogin">
                        <img
                          src={facebook}
                          alt="facebook"
                          className="facebook"
                        />
                        Login with Facebook
                      </button>
                      <button className="linkdelnlogin">
                        <img
                          src={linkedin}
                          alt="facebook"
                          className="facebook"
                        />
                        Login with LinkedIn
                      </button>
                      <hr />
                      <p className="egis">Don’t have an Actitude account?</p>
                      <h4 onClick={redirectToSignup} className="register-text">
                        Register now
                      </h4>
                    </form>
                  </section>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      <button
        className={`back-to-top-button ${position > 100 ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="fa-icon" />
      </button>
    </>
  );
};

export default Navbar;
