import React, { Component } from "react";
import { Link } from 'react-router-dom'; //para el enrutado


class Nav extends Component {
  render() {
    return <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/list">Listnews</Link>
    </nav>;
  }
}

export default Nav;
