import React, { Component } from "react";
// Reference to edit a card
// https://www.youtube.com/watch?v=WTh54FMNrbU
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardInEdit: false
    };

    this.handleCardEdit = this.handleCardEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this, this.props.name);
  }

  handleCardEdit() {
    this.setState({
      isCardInEdit: !this.state.isCardInEdit
    });
  }

  handleDelete(cardName) {
    this.props.deleteHandler(cardName);
  }

  updateComponentFields = () => {
    this.setState({
      isCardInEdit: false
    });
  };

  renderEditView = () => {
    var statusStyle =
      this.props.status.toLowerCase() === "expired"
        ? "card-container-invalid color-invalid"
        : "card-container-valid color-valid";
    return (
      <div className={"card-container " + statusStyle}>
        <div className="grid-items-header">
          <h2>
            <input type="text" defaultValue={this.props.name} />
          </h2>
          <a className="expand-button" href="/">
            <i className="fa fa-eye">
              <span>View</span>
            </i>
          </a>
        </div>
        <div className="grid-items-content">
          <h3>
            <b>Status:</b>{" "}
            <input type="text" defaultValue={this.props.status} />
          </h3>
          <h3>
            <b>Date of Issue:</b>
            <input type="text" defaultValue={this.props.issueDate} />
          </h3>
          <h3>
            <b>Date of Expiry:</b>
            <input type="text" defaultValue={this.props.expiryDate} />
          </h3>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            onClick={this.updateComponentFields}
          >
            Save
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={this.handleCardEdit}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  renderDefaultView = () => {
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
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            onClick={this.handleCardEdit}
          >
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
  };

  render() {
    return this.state.isCardInEdit || !this.props.name
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Card;
