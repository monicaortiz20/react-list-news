import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sendTo:false
    }
  }

//----- Funciones propias de este componente -----//

addNew = (e) => {
  e.preventDefault();

  const abstract = e.target.abstract.value;
  const snippet = e.target.snippet.value;
  const lead_paragraph = e.target.lead_paragraph.value;

  const createNew = {abstract, snippet, lead_paragraph};
  // para hacer un push al array de todas las news .push(newNews);
  this.props.data(createNew)
  this.setState({sendTo:true})

}


 
  render() {
    const { sendTo } = this.state;
    if(sendTo) {
      return <Navigate to = "/list"/>
    }


    return <section>
      <h1 className="title-section">Añade una noticia</h1>
      <form  className='form-news' onSubmit={this.addNew}>
        <label htmlFor="abstract">Título:</label>
        <input type="text" id="abstract" name="abstract" placeholder="Ciencia experimental"/>

        <label htmlFor="snippet">Subtítulo:</label>
        <input type="text" id="snippet" name="snippet" placeholder="Desarrollan vacuna"/>

        <label htmlFor="lead_paragraph">Descripción:</label>
        <textarea type="text" id="lead_paragraph" name="lead_paragraph" placeholder=".....Tras años de estudio,..." rows="10" cols="50"/>
        <button type="submit" value="añadir" className="button-83">Añadir</button>
      </form>

    </section>;
  }
}

export default Form;
