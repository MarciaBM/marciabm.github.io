import React from "react";
import "./CompetitiveSites.css";
import {Tooltip} from "react-tooltip";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
                <li className="competitive-sites-inline"
                    data-tooltip-id="my-tooltip2" data-tooltip-content={logo.siteName}
                    name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
            );
          })}
        </ul>
          <Tooltip id="my-tooltip2" style={{ backgroundColor: "rgb(255,255,255)",
              fontWeight: "bold", color: "#000000" }} />
      </div>
    );
  }
}

export default CompetitiveSites;
