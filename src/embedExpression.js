// embedding expression in JSX using functional way
function EmbedExpression() {
  const companyName = "Dumbways";

  const getBatch = (value) => {
    return value;
  };

  return (
    <div>
      Welcome to {companyName} batch {getBatch(27)}
    </div>
  );
}

// embedding expression in JSX using class way
import React, { Component } from "react";

class EmbedExpression extends Component {
  getBatch(value) {
    return value;
  }

  render() {
    const companyName = "Dumbways";

    return (
      <div>
        Welcome to {companyName} batch {this.getBatch(27)}
      </div>
    );
  }
}

export default EmbedExpression;
