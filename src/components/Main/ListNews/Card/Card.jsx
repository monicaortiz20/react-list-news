import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.news.title || "Noticia de actualidad"
    }
  }


  render() {
    const { abstract, snippet, lead_paragraph } = this.props.news
    return <section className="card">
      <div className="header">
        <h2>{abstract}</h2>
      </div>
        <div className="container">
          <h3>{snippet}</h3>
          <p>{lead_paragraph}</p>
          <button className="button-83" onClick={this.props.delete}>Borrar</button>
        </div>
    </section>;
  }
}

export default Card;
