import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue, whiteSpace: "pre-wrap"}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Lead Research Fellow")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Full-Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Science and Computer Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Engineer")
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
                style={{ color: theme.text }}>
                <div className="entities">
                  A <mark data-entity="noun">science and computer engineer</mark>{" "}
                  who is <mark data-entity="verb">passionated</mark>{" "} about {" "}
                  <mark data-entity="noun">data analysis and engineering</mark>,
                  and has recently worked on the {" "}
                  <mark data-entity="skill">full-stack development</mark> of the LAND IT project,
                  a supporting decision system.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
