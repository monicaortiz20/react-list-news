import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';

export class Main extends Component {
  render() {
    return <main>
      <Routes>
        <Route element = {<Home/>} path={"/"}/>
        <Route element = {<Form/>} path={"/form"}/>
        <Route element = {<ListNews/>} path={"/list"}/>
      </Routes>
    </main>;
  }
}

export default Main;
