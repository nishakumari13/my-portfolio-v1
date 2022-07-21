import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tabs.css";
import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a7ffeb",
    },
    secondary: {
      main: "#84ffff",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `simple-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={
        isMobile ? `simple-tab-${index}` : `vertical-tab-${index}`
      }
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `${isMobile ? `simple-tab-${index}` : `vertical-tab-${index}`}`,
    "aria-controls": `${
      isMobile ? `simple-tabpanel-${index}` : `vertical-tabpanel-${index}`
    }`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const color = blue[50];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="secondary"
                color="secondary"
                centered
                className="tabs-main"
              >
                <Tab label="NTT Data" {...a11yProps(0)} className="tabs-item" />
                <Tab label="TCS ION" {...a11yProps(1)} className="tabs-item" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} className="tabs-panel">
              <ul className="ul-exp">
                <li className="li-exp">
                  As a developer, was responsible for building new components
                  from scratch for clients website, handling Api integrations
                  for the resouces and quality code deployment.
                </li>
                {/* <li className="li-exp">
                  Worked with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  React, Opencms, node js and Graphql.
                </li> */}
                <li className="li-exp">
                  Executed and contributed to full-stack web development
                  projects, with an emphasis on front end features, browser
                  manipulation, and cross-browser compatibility.
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={1} className="tabs-panel">
              <ul className="ul-exp">
                <li className="li-exp">
                  Worked as an intern in TCS ION and developed a mini project
                  based on Agile methodology. The project deals with the online
                  medical facilities provided to users. Write modern,
                  performant, maintainable code for a diverse array of client
                  and internal projects.
                </li>
                <li className="li-exp">
                  Backend includes developement using Spring Boot with Hibernate
                  JPA. Frontend was developed using HTML, CSS, JavaScript,
                  Bootstrap. Database used is MySQL.
                </li>
              </ul>
            </TabPanel>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            // bgcolor: "background.paper",
            display: "flex",
            height: 200,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            textColor="secondary"
            // indicatorColor="primary"
            color="secondary"
            centered
            className="tabs-main"
          >
            <Tab label="NTT Data" {...a11yProps(0)} className="tabs-item" />
            <Tab label="TCS ION" {...a11yProps(1)} className="tabs-item" />
          </Tabs>
          <TabPanel value={value} index={0} className="tabs-panel">
            <ul className="ul-exp">
              <li className="li-exp">
                As a developer, was responsible for building new components from
                scratch for clients website, handling Api integrations for the
                resouces and quality code deployment.
              </li>
              {/* <li className="li-exp">
                Worked with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                React, Opencms, node js and Graphql.
              </li> */}
              <li className="li-exp">
                Executed and contributed to full-stack web development projects,
                with an emphasis on front end features, browser manipulation,
                and cross-browser compatibility.
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1} className="tabs-panel">
            <ul className="ul-exp">
              <li className="li-exp">
                Worked as an intern in TCS ION and developed a mini project
                based on Agile methodology. The project deals with the online
                medical facilities provided to users. Write modern, performant,
                maintainable code for a diverse array of client and internal
                projects.
              </li>
              <li className="li-exp">
                Backend includes developement using Spring Boot with Hibernate
                JPA. Frontend was developed using HTML, CSS, JavaScript,
                Bootstrap. Database used is MySQL.
              </li>
            </ul>
          </TabPanel>
        </Box>
      )}
    </ThemeProvider>
  );
}
