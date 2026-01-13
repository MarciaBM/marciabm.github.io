import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button.jsx";
import {greeting} from "../../portfolio.jsx";
import {Fade} from "react-awesome-reveal";
import BannerImg from "./BannerImg.jsx";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";
import {competitiveSites} from "../../portfolio.jsx";

export default function Greeting(props) {
    const theme = props.theme;
    return (
        <Fade direction={"up"} duration={2000} triggerOnce={true}>
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <h1 className="greeting-text" style={{color: theme.orange}}>
                            {greeting.title}
                        </h1>
                        <div className={"greeting-name"}>
                            <h1 className="greeting-sub" style={{color: theme.grayText}}>
                                I'm
                            </h1>
                            <h1 className="greeting-sub">
                                {greeting.sub}
                            </h1>
                        </div>
                        <h1 className="greeting-typewriter" style={{color: theme.blue, whiteSpace: "pre-wrap"}}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Full-Stack Lead Engineer")
                                        .pauseFor(200)
                                        .deleteAll()
                                        .typeString("Science and Computer Engineer")
                                        .pauseFor(200)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <span
                            className="greeting-text-span subTitle"
                            style={{color: theme.text}}>
                <div className="entities">
                  A <b style={{color: "var(--themeBlue)"}}>science and computer engineer</b> who is passionated about
                    <b style={{color: "var(--themeOrange)"}}> data analysis and engineering</b>,
                  and has recently worked as a Full-Stack Lead Engineer in the LAND IT project,
                    a web-based decision supporting system for territory management. Additionally,
                    I have experience in <b style={{color: "var(--themeBlue)"}}>client communication </b>
                    and <b style={{color: "var(--themeOrange)"}}>managing a small team of developers</b>.

                </div>
              </span>
                        <CompetitiveSites logos={competitiveSites.competitiveSites}/>
                        <div className="button-greeting-div">
                            <Button text="Contact me" href="/contact"/>
                            <Button
                                text="My resume"
                                newTab={true}
                                href={greeting.resumeLinkENG}
                            />
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <BannerImg className={"under"}/>
                        <img className={"over"} src={"assets/greeting/me.jpg"} alt={""}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
