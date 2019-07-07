import React, { Component } from "react";
// To - Do:
// Contact the cardboard to signal the button click from here
class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: "btn-filter active",
      valid: "btn-filter",
      expired: "btn-filter"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let button = e.target.value;
    console.log(button);
    if (button === "all") {
      this.setState({
        all: "btn-filter active",
        valid: "btn-filter",
        expired: "btn-filter"
      });
    } else if (button === "valid") {
      this.setState({
        all: "btn-filter",
        valid: "btn-filter active",
        expired: "btn-filter"
      });
    } else {
      this.setState({
        all: "btn-filter",
        valid: "btn-filter",
        expired: "btn-filter active"
      });
    }
  }

  render() {
    return (
      <div className="myBtnContainer">
        <button
          className={this.state.all}
          value="all"
          onClick={this.handleClick}
        >
          Show all
        </button>
        <button
          className={this.state.valid}
          value="valid"
          onClick={this.handleClick}
        >
          Valid
        </button>
        <button
          className={this.state.expired}
          value="expired"
          onClick={this.handleClick}
        >
          Expired
        </button>
      </div>
    );
  }
}

export default FilterBar;
