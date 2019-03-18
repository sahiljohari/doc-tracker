import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleUsernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChanged(e) {
    this.setState({
      password: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    var url = "http://localhost:5000/login";
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      credentials: "omit",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          Username:{" "}
          <input
            type="text"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleUsernameChanged}
          />
          Password:{" "}
          <input
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handlePasswordChanged}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
