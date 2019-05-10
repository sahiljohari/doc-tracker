import React, { Component } from "react";
import Card from "./card";

class CardBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
      data: this.props.responseData.data
    };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard() {
    this.setState(currentState => {
      return {
        data: currentState.data.concat([
          {
            docName: "",
            status: "",
            issueDate: "",
            expiryDate: ""
          }
        ])
      };
    });
  }

  removeCard(cardName) {
    this.setState(prevState => ({
      data: prevState.data.filter(el => el.docName !== cardName)
    }));
  }

  render() {
    // const data = this.props.responseData.data;
    // console.log(data);
    return (
      <div className="main-container">
        <button className=" btn btn-light add-card" onClick={this.addCard}>
          <i className="fa fa-plus-circle" />
        </button>
        {this.state.data.map(item => (
          <Card
            key={item.docName}
            name={item.docName}
            status={item.status}
            issueDate={item.issueDate}
            expiryDate={item.expiryDate}
            deleteHandler={this.removeCard}
          />
        ))}
      </div>
    );
  }
}

export default CardBoard;
