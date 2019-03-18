import React, { Component } from "react";
import Card from "./card";

class CardBoard extends Component {
  render() {
    const data = this.props.responseData.data;
    return (
      <div className="main-container">
        {data.map(item => (
          <Card
            key={item.docName}
            name={item.docName}
            status={item.status}
            issueDate={item.issueDate}
            expiryDate={item.expiryDate}
          />
        ))}
      </div>
    );
  }
}

export default CardBoard;
