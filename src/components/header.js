// create component in functional way
function Header() {
  return <div>This is header component</div>;
}

// create component in class way
import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div>This is Header</div>;
  }
}

export default Header;
