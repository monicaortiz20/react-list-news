import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';

export class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news:[]
    }
  }

  //----- Funciones propias de este componente -----//
  createNew(note)
  {
    this.setState({news: [...this.state.news, note]})
  }
  render() {
    return <main>
      <Routes>
        <Route element = {<Home/>} path={"/"}/>
        <Route element = {<Form data={(note)=>this.createNew(note)} />} path={"/form"}/>
        <Route element = {<ListNews data={this.state}/>} path={"/list"}/>
      </Routes>
    </main>;
  }
}

export default Main;
