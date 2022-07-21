import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FiCodepen } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer-id">
        {isMobile ? (
          <div className="social-icons">
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
          </div>
        ) : (
          ""
        )}
        <div className="info">Designed & Built by Nisha Kumari</div>
        <div className="info">Inspired by Brittany Chiang</div>
        <div className="stars">
          <AiOutlineStar />
        </div>
      </div>
    </>
  );
};

export default Footer;
