import React, { Component } from "react";
import NavBar from "./navbar";
import CardBoard from "./cardboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      responseData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          responseData: json,
          isLoaded: true
        });
      })
      .catch(error => console.log("Error!", error));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <NavBar />
          <CardBoard responseData={this.state.responseData} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
