import React, { Component } from "react";

class Card extends Component {
  render() {
    var statusStyle = "";
    if (this.props.status === "Expired") {
      statusStyle = "card-container-invalid";
    } else {
      statusStyle = "card-container";
    }
    return (
      <div className={statusStyle}>
        <div className="grid-items-header">
          <h2>{this.props.name}</h2>
        </div>
        <div className="grid-items-content">
          <h3>
            <b>Status:</b> {this.props.status}
          </h3>
          <h3>
            <b>Date of Issue:</b> {this.props.issueDate}
          </h3>
          <h3>
            <b>Date of Expiry:</b> {this.props.expiryDate}
          </h3>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-success btn-block">
            Edit
          </button>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-danger btn-block">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
