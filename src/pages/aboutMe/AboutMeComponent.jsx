import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";
import {Fade} from "react-bootstrap";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import "./aboutMe.css";
import AboutMeImg from "./AboutMeImg.jsx";
import SkillsSet from "./SkillsSet.jsx";

class AboutMeComponent extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={"about-main"}>
                <Header theme={theme}/>
                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">
                            <div className="heading-text-div">
                                <h1 className="heading-text" style={{color: theme.orange}}>
                                    About Me
                                </h1>
                                <h3 className="heading-sub-text" style={{color: theme.text}}>
                                    Idioms, Languages and Hobbies
                                </h3>
                            </div>
                            <div className="heading-img-div">
                                <AboutMeImg theme={theme}/>
                            </div>
                        </div>
                    </Fade>
                    <SkillsSet theme={this.props.theme}/>
                </div>
                <Footer theme={this.props.theme}/>
                <TopButton theme={this.props.theme}/>
            </div>)
    }
}

export default AboutMeComponent;