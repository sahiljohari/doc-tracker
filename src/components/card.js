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

  formatDate(date) {
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${dateString}`;
  }

  handleCardEdit() {
    this.setState({
      isCardInEdit: !this.state.isCardInEdit
    });
    this.props.editHandler(this.state.isCardInEdit);
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  updateComponentFields = () => {
    let newData = null;
    if (this.props.id) {
      newData = {
        _id: this.props.id,
        docName: this.refs.cardHeaderText.value,
        status: this.refs.cardStatusText.value,
        issueDate: this.refs.cardIssueDateText.value,
        expireDate: this.refs.cardExpireDateText.value
      };
    } else {
      newData = {
        docName: this.refs.cardHeaderText.value,
        status: this.refs.cardStatusText.value,
        issueDate: this.refs.cardIssueDateText.value,
        expireDate: this.refs.cardExpireDateText.value
      };
    }
    this.props.updateHandler(newData);

    this.setState({
      isCardInEdit: false
    });
  };

  renderEditView = () => {
    var statusStyle = "card-container-neutral color-neutral";
    return (
      <div className={"card-container " + statusStyle}>
        <div className="grid-items-header">
          <h2>
            <select ref="cardHeaderText" defaultValue={this.props.name}>
              <option value="Passport">Passport</option>
              <option value="Visa">Visa</option>
              <option value="Credit card">Credit card</option>
              <option value="Drivers License">Drivers License</option>
            </select>
            {/* <input
              type="text"
              ref="cardHeaderText"
              defaultValue={this.props.name}
            /> */}
          </h2>
          {/* <a className="expand-button" href="/">
            <i className="fa fa-eye">
              <span>View</span>
            </i>
          </a> */}
        </div>
        <div className="grid-items-content">
          <h3>
            <b>Status:</b>
          </h3>
          <select ref="cardStatusText" defaultValue={this.props.status}>
            <option value="Valid">Valid</option>
            <option value="Expired">Expired</option>
          </select>
          <h3>
            <b>Date of Issue:</b>
          </h3>
          <input
            type="date"
            ref="cardIssueDateText"
            defaultValue={this.formatDate(new Date(this.props.issueDate))}
          />
          <h3>
            <b>Date of Expiry:</b>
          </h3>
          <input
            type="date"
            ref="cardExpireDateText"
            defaultValue={this.formatDate(new Date(this.props.expiryDate))}
          />
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
          {/* <a className="expand-button" href="/">
            <i className="fa fa-eye">
              <span>View</span>
            </i>
          </a> */}
        </div>
        <div className="grid-items-content">
          <h3>
            <b>Status:</b> {this.props.status}
          </h3>
          <h3>
            <b>Date of Issue:</b>{" "}
            {this.formatDate(new Date(this.props.issueDate))}
          </h3>
          <h3>
            <b>Date of Expiry:</b>{" "}
            {this.formatDate(new Date(this.props.expiryDate))}
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
