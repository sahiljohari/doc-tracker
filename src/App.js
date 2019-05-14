import React, { Component } from "react";
import NavBar from "./navbar";
import CardBoard from "./cardboard";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CardBoard />
      </div>
    );
  }
}

export default App;
