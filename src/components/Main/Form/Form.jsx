import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // news       ----------------> revisar!!!!
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



  render() {
    return <section>
      <h1 className="title-section">Añade una noticia</h1>
      <form  className='form-news' onSubmit={this.addNew}>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" placeholder="Kiko Rivera se retira"/>

        <label htmlFor="subtitle">Subtítulo:</label>
        <input type="text" id="subtitle" name="subtitle" placeholder="Vuelve a estudiar"/>

        <label htmlFor="description">Descripción:</label>
        <textarea type="text" id="description" name="description" placeholder=".....Tras años sin dar palo al agua,..." rows="10" cols="50"/>
        <button type="submit" value="añadir" onClick={this.addNew}>Añadir</button>
      </form>

    </section>;
  }
}

export default Form;
