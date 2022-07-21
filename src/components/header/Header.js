import React, { useState } from "react";
import "animate.css";
import logo from "../../images/logo-p.png";
import "../header/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import resume from "../../images/My_Resume.pdf";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const Header = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const handleOptions = () => {
    setIsMenuToggle(!isMenuToggle);
  };
  return (
    <>
      <div className="main-header">
        <div className="left-header">
          <img
            className="logo animate__animated animate__slideInDown"
            src={logo}
            alt="logo"
          />
        </div>
        {isMobile ? (
          <>
            <div className="hamburger-menu">
              {isMenuToggle ? (
                <CloseIcon onClick={handleOptions} className="cross-icon" />
              ) : (
                <MenuIcon onClick={handleOptions} className="menu-icon" />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="right-header animate__animated animate__slideInDown">
              <a
                className="options animate__animated animate__slideInDown active"
                href="#home-id"
              >
                Home
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#exp-id"
              >
                Experience
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#skills-id"
              >
                Skills
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#project-id"
              >
                Projects
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#contact-id"
              >
                Contact
              </a>

              <button className="resume animate__animated animate__slideInDown">
                <a href={resume} download className="resume-link">
                  RESUME
                </a>
              </button>
            </div>
          </>
        )}
      </div>
      {isMenuToggle ? (
        <div className="mobile-menu animate__animated animate__slideInDown">
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#home-id"
            >
              Home
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#exp-id"
            >
              Experience
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#skills-id"
            >
              Skills
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#project-id"
            >
              Projects
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#contact-id"
            >
              Contact
            </a>
          </div>

          <button className="mobile-resume animate__animated animate__slideInDown">
            RESUME
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
