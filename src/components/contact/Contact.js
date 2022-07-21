import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-main" id="contact-id" data-aos="zoom-in">
        <div className="contact-head">
          <hr className="hr-left" />
          <h2 className="heading-contact">Get In Touch</h2>
          <hr className="hr-contact" />
        </div>
        <div className="contact-div">
          {/* <h2 className="heading-text">Get In Touch</h2> */}
          <div className="para">
            <p>
              I’m currently looking for new opportunities, my inbox is always
              open. Whether you want to build an interactive website of your own
              or you have a question or just want to say hi, then just click the
              below button!
            </p>
          </div>
          <div className="button-style">
            <a
              className="contact-btn"
              href="mailto:nishu13nisi@gmail.com"
              target="_blank"
            >
              Say hello!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
