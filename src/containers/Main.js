import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/EduEx/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

import ReactGA from "react-ga";

// Initialize Google Analytics page tracking
ReactGA.initialize("YOUR_GOOGLE_ANALYTICS_TRACKING_ID");

class Main extends Component {
  componentDidMount() {
    // Track page view on mount
    this.trackPageView(window.location.pathname);
  }

  trackPageView = (pathname) => {
    ReactGA.pageview(pathname);
    console.log(`Page viewed: ${pathname}`);
  };

  render() {
    return (
        <div>
          <Router>
            <Routes>
              {settings.isSplash ? (
                  <>
                    <Route
                        path="/"
                        element={<Splash theme={this.props.theme} />}
                    />
                    <Route
                        path="/home"
                        element={<Home theme={this.props.theme} />}
                    />
                    <Route
                        path="/education"
                        element={<Education theme={this.props.theme} />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact theme={this.props.theme} />}
                    />
                    <Route
                        path="/splash"
                        element={<Splash theme={this.props.theme} />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects theme={this.props.theme} />}
                    />
                  </>
              ) : (
                  <>
                    <Route
                        path="/"
                        element={<Home theme={this.props.theme} />}
                    />
                    <Route
                        path="/home"
                        element={<Home theme={this.props.theme} />}
                    />
                    <Route
                        path="/education"
                        element={<Education theme={this.props.theme} />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact theme={this.props.theme} />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects theme={this.props.theme} />}
                    />
                  </>
              )}
            </Routes>
          </Router>
        </div>
    );
  }
}

export default Main;
