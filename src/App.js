import React, { Component } from "react";
import NavBar from "./navbar";
import CardBoard from "./cardboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [
        {
          docName: "Passport",
          status: "Valid",
          issueDate: "2015-03-03",
          expiryDate: "2025-03-02"
        },
        {
          docName: "Driver's License",
          status: "Expired",
          issueDate: "2017-05-02",
          expiryDate: "2018-05-01"
        },
        {
          docName: "Credit Card",
          status: "Expired",
          issueDate: "2015-03-03",
          expiryDate: "2025-03-02"
        },
        {
          docName: "Visa",
          status: "Valid",
          issueDate: "2015-03-03",
          expiryDate: "2025-03-02"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <CardBoard data={this.state.data} />
      </div>
    );
  }
}

export default App;
