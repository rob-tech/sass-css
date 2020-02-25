import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SideBar from "./SideBar"

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <div id="mainCont">
            <SideBar />
            <div id="mainBodyCol">
              <Route path="/" exact component={HomePage} />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default Main;
