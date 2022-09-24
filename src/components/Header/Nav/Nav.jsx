import React, { Component } from "react";
import { Link } from 'react-router-dom'; //para el enrutado

import { userContext } from '../../../context/userContext';


class Nav extends Component {
  render() {
    return <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/list">Listnews</Link>

      <userContext.Consumer> 
        {({ user, logout }) => user ? <button className="button-83" onClick={logout}>Log out</button> : null}
      </userContext.Consumer>
      {/* en el nav proveemos la func logout y user, si hay alguien registrado, que salga el btn */}
    </nav>;
  }
}

export default Nav;
