import Header from "./components/header";

// create component in functional way
function App() {
  return (
    <div className="app">
      <Header />
      <div>This is App Component</div>
      <Content />
    </div>
  );
}

function Content() {
  return <div>Content component</div>;
}

// create component in Class way
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div>This is App Component</div>
        <Content />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return <div>Content of this page</div>;
  }
}

export default App;
