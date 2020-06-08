import React, { Component } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Controls from "./controls";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{Constants.APP_TITLE}</h1>
        </header>
        <div className="Game">
          <Scorecard />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
