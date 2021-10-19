import React, { useState } from "react";

// define and manage state in functional component way
function State() {
  // define state
  const [count, setCount] = useState(0);

  const increment = () => {
    // set new value to state
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    // set new value to state
    setCount(count <= 0 ? count : count - 1);
  };

  return (
    <div className="app">
      <p>{count}</p>
      <div className="button-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

// define and manage state in class component way
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // we must binding method to have access to `this`
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count === 0 ? this.state.count : this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="app">
        <p>{this.state.count}</p>
        <div className="button-container">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default State;
