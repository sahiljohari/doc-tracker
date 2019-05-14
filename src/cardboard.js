import React, { Component } from "react";
import Card from "./card";
import { getRequest, sendRequest } from "./helper/fetchHelper";
import { url } from "./helper/config";
class CardBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
      data: []
    };
    this.url = url("local");
    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  fetchData() {
    getRequest(this.url + "/document")
      .then(json => {
        if (json.error) {
          console.log("error: ", json.error);
        } else {
          this.setState({
            data: json.data
          });
        }
      })
      .catch(err => console.log("err:", err));
  }

  addCard() {
    this.setState(currentState => {
      var newData = currentState.data;
      newData.unshift({
        docName: "",
        status: "",
        issueDate: "",
        expireDate: ""
      });
      return {
        data: newData
      };
    });
  }

  editCard(isEdit) {
    if (!isEdit) {
      this.fetchData();
    }
  }

  updateCard(cardData) {
    // fetch the POST/PUT end-point
    cardData._id
      ? sendRequest(
          `${this.url}/document/${cardData._id}`,
          "PUT",
          cardData
        ).then(() => {
          this.fetchData();
        })
      : sendRequest(`${this.url}/document`, "POST", cardData).then(() => {
          this.fetchData();
        });
    // this.props.refreshState(true);
  }

  removeCard(cardId) {
    cardId
      ? sendRequest(`${this.url}/document/${cardId}`, "DELETE").then(() => {
          this.fetchData();
        })
      : this.setState(prevState => ({
          data: prevState.data.filter(el => el._id !== cardId)
        }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="main-container">
        <button className=" btn btn-light add-card" onClick={this.addCard}>
          <i className="fa fa-plus-circle" />
        </button>
        {this.state.data.map(item => (
          <Card
            key={item._id}
            id={item._id}
            name={item.docName}
            status={item.status}
            issueDate={item.issueDate}
            expiryDate={item.expireDate}
            editHandler={this.editCard}
            updateHandler={this.updateCard}
            deleteHandler={this.removeCard}
          />
        ))}
      </div>
    );
  }
}

export default CardBoard;
