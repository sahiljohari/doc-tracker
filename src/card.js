import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardExpanded: false
    };

    this.handleCardExpansion = this.handleCardExpansion.bind(this);
    this.handleDelete = this.handleDelete.bind(this, this.props.name);
  }

  handleCardExpansion() {
    this.setState({
      isCardExpanded: !this.state.isCardExpanded
    });
  }

  handleDelete(cardName) {
    this.props.deleteHandler(cardName);
  }

  render() {
    var statusStyle =
      this.props.status.toLowerCase() === "expired"
        ? "card-container-invalid color-invalid"
        : "card-container-valid color-valid";
    return (
      <div className={"card-container " + statusStyle}>
        <div className="grid-items-header">
          <h2>{this.props.name}</h2>
          <a className="expand-button" href="/">
            <i className="fa fa-eye">
              <span>View</span>
            </i>
          </a>
        </div>
        {/* {this.state.isCardExpanded ? ( */}
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
        {
          // ) : (
          //   <div className="grid-items-content" />
          // )}
        }
        <div className="buttons">
          <button type="button" className="btn btn-outline-success btn-block">
            Edit
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
