import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import "./aboutMe.css";
import {Fade} from "react-reveal";
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
                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">
                            <div className="heading-img-div">
                                <AboutMeImg theme={theme}/>
                            </div>
                            <div className="heading-text-div">
                                <h1 className="heading-text" style={{color: theme.orange}}>
                                    About Me
                                </h1>
                                <h3 className="heading-sub-text" style={{color: theme.text}}>
                                    Soft Skills, Idioms,
                                    <br/>Languages and Hobbies
                                </h3>
                            </div>
                        </div>
                    </Fade>
                    <div style={{display: "flex", flexDirection: "row", gap: "20px", justifyContent: "space-around"}}>
                        <div>
                            <SkillsSet theme={this.props.theme} name={"Main Programming Languages"} skills={languages}/>
                            <SkillsSet theme={this.props.theme} name={"Idioms"} skills={idioms}/>
                        </div>
                        <div>
                            <div>
                                <h3>Main Soft Skills</h3>
                                <div className="soft-skills">
                                    {softSkills.map(s => <span>{s}</span>)}
                                </div>
                            </div>
                            <br/>
                            <div>
                                <h3>My Hobbies</h3>
                                <br/>
                                <SoftwareSkill logos={hobbies}/>
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