import React, { Component } from "react";
import Nav from './Nav/Nav';

import { userContext } from '../../context/userContext';

export class Header extends Component {
  render() {
    return (
    <header>
      <Nav />
      <userContext.Consumer>
        {({ user }) => user ? <h2>¡Hola, {user}!</h2> : null}
      </userContext.Consumer>
    </header>
    )
  }
}

export default Header;
