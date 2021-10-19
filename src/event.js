import React from "react";

function Event() {
  const getBatch = (value) => {
    return value;
  };
  const companyName = "Dumbways.id";

  const greetings = () => {
    alert(`Hello Bootcamp Student Batch ${getBatch(27)}`);
  };

  const spyChange = (e) => {
    console.log("change input with value", e.target.value);
  };

  return (
    <div>
      <p>
        Welcome to {companyName} Batch {getBatch(27)}
      </p>
      <button onClick={greetings}>Click Me</button>
      <input onChange={spyChange}></input>
    </div>
  );
}

export default Event;
