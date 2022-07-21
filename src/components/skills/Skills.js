import React from "react";
import "./skills.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Skills = () => {
  return (
    <>
      <div className="skills-main" id="skills-id">
        <div className="header-skills">
          <h2 className="heading-skills">Skills</h2>
          <hr className="hr-skills" />
        </div>
        <div className="skills-section">
          <div className="left-sec" data-aos="fade-right">
            <h3 className="heading-style">Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div className="content-text">
                  <h4 className="content-style">HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">React Js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Angular</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
          <div className="right-sec" data-aos="fade-left">
            <h3 className="heading-style">Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Node Js</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">MongoDB</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Java</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">MySql</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              {/* <article className="experience_details">
              <DoneAllIcon className='experience_details_icons' />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DoneAllIcon />
              <div>
              <h4>Angular</h4>
              <small className="text-light">Basic</small>
              </div>
            </article> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
