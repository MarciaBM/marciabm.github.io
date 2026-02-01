import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import "./aboutMe.css";
import {Fade} from "react-awesome-reveal";
import AboutMeImg from "./AboutMeImg.jsx";
import SkillsSet from "./SkillsSet.jsx";
import {hobbies, idioms, languages, softSkills} from "../../portfolio.jsx";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill.jsx";

class AboutMeComponent extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={"about-main"}>
                <Header theme={theme}/>
                <div className="basic-about">
                    <Fade direction={"up"} duration={2000} triggerOnce={true}>
                        <div className="heading-div-about">
                            {/*<div className="heading-img-div-about">*/}
                            {/*    <AboutMeImg theme={theme}/>*/}
                            {/*</div>*/}
                            <div className="heading-text-div-about">
                                <h1 className="heading-text-about" style={{color: theme.orange}}>
                                    About Me
                                </h1>
                                <p className="heading-sub-text-about" style={{color: theme.text}}>
                                    <b>Soft Skills, Idioms, Languages and Hobbies</b>
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <div className={"heading-div-about2"}>
                        <div>
                            <span><b>Date of Birth:</b> 08<sup>th</sup> Jan 2000</span>
                            <br/>
                            <span><b>Address:</b> Mafra, Lisboa, Portugal</span>
                            <SkillsSet theme={this.props.theme} name={"Main Programming Languages"} skills={languages}/>
                            <SkillsSet theme={this.props.theme} name={"Idioms"} skills={idioms}/>
                        </div>
                        <div>
                            <div>
                                <h3>Main Soft Skills</h3>
                                <div className="soft-skills">
                                    {softSkills.map((s, index) => <span key={index}>{s}</span>)}
                                </div>
                            </div>
                            <br/>
                            <div>
                                <h3>My Hobbies and Interests</h3>
                                <div className={"hobbies"}>
                                    <SoftwareSkill logos={hobbies}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer theme={this.props.theme}/>
                <TopButton theme={this.props.theme}/>
            </div>)
    }
}

export default AboutMeComponent;