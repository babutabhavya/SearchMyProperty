import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/index";
import ContactUs from "./screens/ContactUs/index";
import Locations from "./screens/Locations/index";
import AboutUs from "./screens/AboutUs/index";
import Projects from "./screens/Projects/index";
import Project from "./screens/Project/index";
import Resale from "./screens/Resale/index";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={["/home", "/"]} component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={Project} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/resale" component={Resale} />
      </Router>
    </div>
  );
}
