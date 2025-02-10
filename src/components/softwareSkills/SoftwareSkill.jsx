import React from "react";
import "./SoftwareSkill.css";
import {Tooltip} from "react-tooltip";

class SoftwareSkill extends React.Component {
    render() {
        return (
            <div>
                <div className="software-skills-main-div">
                    <ul className="dev-icons">
                        {this.props.logos.map((logo) => {
                            return (
                                <li className="software-skill-inline"
                                    data-tooltip-id="my-tooltip" data-tooltip-content={logo.skillName}
                                    name={logo.skillName}>
                                    <span
                                        className="iconify"
                                        data-icon={logo.fontAwesomeClassname}
                                        style={logo.style}
                                        data-inline="false"
                                    ></span>
                                </li>
                            );
                        })}
                    </ul>
                    <Tooltip id="my-tooltip" style={{ backgroundColor: "rgb(255,255,255)",
                        fontWeight: "bold", color: "#000000" }} />
                </div>
            </div>
        );
    }
}

export default SoftwareSkill;
