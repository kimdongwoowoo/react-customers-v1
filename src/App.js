import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>고객관리 시스템</h2>
      </div>
    );
  }
}

export default App;
