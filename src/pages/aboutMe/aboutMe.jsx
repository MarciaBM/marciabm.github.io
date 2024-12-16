import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";

class AboutMe extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={"about-main"}>
                <Header theme={theme} />
            </div>
        );
    }
}

export default AboutMe;