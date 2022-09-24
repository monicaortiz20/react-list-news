import React, { Component } from "react";
import Nav from './Nav/Nav';

export class Header extends Component {
  render() {
    return (
    <header>
      <Nav />
      <p>Header: Aquí va el nombre del User(contesxt)</p>
    </header>
    )
  }
}

export default Header;
