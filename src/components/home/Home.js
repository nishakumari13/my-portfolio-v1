import React from "react";
import "../home/home.css";
import "animate.css";
import profile from "../../images/profile-pic.PNG";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FiCodepen } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const Home = () => {
  return (
    <>
      <div className="home" id="home-id">
        {isMobile ? (
          ""
        ) : (
          <div className="home-icons">
            <SiLeetcode
              className="leet-icons"
              onClick={() => window.open("https://leetcode.com/Nisha-Kumari/")}
            />
            <FiCodepen
              className="code-icons"
              onClick={() => window.open("https://github.com/nishakumari13")}
            />
            <LinkedInIcon
              className="linked-icons"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nisha-kumari-a9721216b/"
                )
              }
            />
            <GitHubIcon
              className="git-icons"
              onClick={() => window.open("https://github.com/nishakumari13")}
            />
            <EmailIcon
              className="mail-icons"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nishu13nisi@gmail.com"
                )
              }
            />
            <hr className="hr" />
          </div>
        )}

        <div>
          <div className="inner-container">
            <div className="left-container animate__animated animate__slideInUp">
              <h5 className="hi-text">Hi,</h5>
              <h3 className="heading">I'm Nisha!</h3>
              <p className="sub-heading">I am a full stack web developer.</p>
              <p className="text">
                I’m a <span className="designation">software engineer </span>
                specializing in building web pages from design to test and up to
                production deployment. Maintained client websites on an ongoing
                basis.
              </p>
              <br />
              <p className="text">
                I am an IT professional with 2+ years of working experience.
                Currently, working at
                <span className="company"> NTT Data Services</span> company as a
                Front-end developer.
              </p>
            </div>
            <div className="right-container">
              <img src={profile} alt="profile-pic" />
            </div>
          </div>
          <div className="button-div">
            <a className="contact" href="#contact-id">
              {/* <a href="#contcat-id"> */}
              Get In Touch
              {/* </a> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
