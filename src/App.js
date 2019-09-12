import React, { Component } from "react";
import CardBoard from "./components/cardboard";
import NavBar from "./components/navbar";

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
