import React from "react";
import "./projects.css";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  return (
    <>
      <div className="project-main" id="project-id">
        <div className="header-proj">
          <h2 className="heading-proj">Projects</h2>
          <hr className="hr-proj" />
        </div>

        <div className="proj-div">
          <div className="container-proj" data-aos="fade-up">
            <div className="header-sec">
              <div className="icon-proj">
                <FolderIcon />
              </div>
              <div className="git-site">
                <GitHubIcon className="git-icon" />
                <OpenInNewIcon />
              </div>
            </div>
            <div className="info-sec">
              <h3 className="proj-name">Google clone</h3>
              <div className="content-proj">
                A simple google keep clone built with React.js and api
              </div>
            </div>
            <div className="tech-used">
              <span className="tech">React</span>
              <span className="tech">Api</span>
            </div>
          </div>

          <div className="container-proj" data-aos="fade-up">
            <div className="header-sec">
              <div className="icon-proj">
                <FolderIcon />
              </div>
              <div className="git-site">
                <GitHubIcon className="git-icon" />
                <OpenInNewIcon />
              </div>
            </div>
            <div className="info-sec">
              <h3 className="proj-name">Google clone</h3>
              <div className="content-proj">
                A simple google keep clone built with React.js and api
              </div>
            </div>
            <div className="tech-used">
              <span className="tech">React</span>
              <span className="tech">Api</span>
            </div>
          </div>

          <div className="container-proj" data-aos="fade-up">
            <div className="header-sec">
              <div className="icon-proj">
                <FolderIcon />
              </div>
              <div className="git-site">
                <GitHubIcon className="git-icon" />
                <OpenInNewIcon />
              </div>
            </div>
            <div className="info-sec">
              <h3 className="proj-name">Google clone</h3>
              <div className="content-proj">
                A simple google keep clone built with React.js and api
              </div>
            </div>
            <div className="tech-used">
              <span className="tech">React</span>
              <span className="tech">Api</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
