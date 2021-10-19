// access props value sent from parent in class way
import React, { Component } from "react";

export class List extends Component {
  render() {
    console.log(List);
    return (
      <>
        <div>{this.props.name}</div>
        <div>{this.props.type}</div>
      </>
    );
  }
}

// access props value sent from parent in functional way
function List(props) {
  console.log(props);
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
    </>
  );
}

export default list;
