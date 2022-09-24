import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../ListNews/Card/index';


class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news
    }
  }

//----- Funciones propias de este componente -----//

addNew = (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const subtitle = e.target.subtitle.value;
  const description = e.target.description.value;

  const createNew = {title, subtitle, description};
  this.setState({news:[...this.state.news, createNew]})

}

deleteNew = (i) => {
  const remainingNews = this.state.news.filter((note, j) =>  i !== j)
  this.setState({news:remainingNews})}


  paintNotes(){
    return this.state.news.map((note,i)=><Card news={note} key={uuidv4()} delete={() => this.deleteNew(i)} />)
   }

  render() {
    return <section>
      <h1>Añade una noticia</h1>
      <form onSubmit={this.addNew}>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title"/>

        <label htmlFor="subtitle">Subtítulo:</label>
        <input type="text" id="subtitle" name="subtitle"/>

        <label htmlFor="description">Descripción:</label>
        <input type="text" id="description" name="description"/>
        <button type="submit" value="añadir" onClick={this.addNew}>Añadir</button>
      </form>

    </section>;
  }
}

export default Form;
