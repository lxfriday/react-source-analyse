import React, { Component } from "react";

class TestThis extends Component {
  componentDidMount() {}

  handleClick() {
    console.log("handleClick", this);
  }

  handleBindClick1 = () => {
    console.log("handleBindClick1", this);
  };

  handleBindClick2() {
    console.log("handleBindClick2", this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <button onClick={this.handleBindClick1}>bind 1 click</button>
        <button onClick={this.handleBindClick2.bind(this)}>bind 2 click</button>
      </div>
    );
  }
}

export default TestThis;
