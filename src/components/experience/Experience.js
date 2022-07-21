import React from "react";
import "./experience.css";
import VerticalTabs from "./VerticalTabs";

const Experience = () => {
  return (
    <>
      <div className="exp-main" id="exp-id" data-aos="zoom-in">
        <div className="header-exp">
          <h2 className="heading-exp">Experience</h2>
          <hr className="hr-exp" />
        </div>
        <div className="tabs-div">
          <VerticalTabs />
        </div>
      </div>
    </>
  );
};

export default Experience;
