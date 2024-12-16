import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
// import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications.jsx";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";
import EducationImg from "./EducationImg.jsx";
import { competitiveSites } from "../../portfolio.jsx";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Resume from "./Resume.jsx";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.orange }}>
                  Experience &#38; Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Resume />
          <Certifications theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
