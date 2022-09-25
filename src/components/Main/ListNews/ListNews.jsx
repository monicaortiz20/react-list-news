import React, { Component } from "react";
import axios from "axios"; //para el fetch
import { v4 as uuidv4 } from 'uuid';
import Card from './Card'


export class ListNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      news: []
    }
  }


  //----- Funciones propias de este componente -----//

  async componentDidMount(){
    this.getNews();
    
  }

  getNews = async() => {
    const response = await axios('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=i0ohH3OIK9HtdSQuci1NXOXfOAqJ7ck8');
    //accedemos a las noticias
    const data = await response.data.response.docs;
    // console.log(data)
    //para obtener copia de una parte del array principal, empezando por inicio (0)
    const dataArray = data.slice(0,6)
    const allNews = [...dataArray, ...this.props.data.news]

    this.setState({
      news:allNews
    })
  }


  paintNotes(){
    return news.map((note,i)=> <Card news={note} key={uuidv4()} delete={()=>this.deleteNew(i)}/>)

  }
  

  deleteNew = (i) => {
   const remainingNews = this.state.news.filter((note, j) =>  i !== j)
   this.setState({news:remainingNews})
  }

  render() {
    //para que nos saque el array con todas las noticias: fetch + creadas
    const allNews = this.state.news //revisar 

    return <section>
      <h1>Noticias</h1>
      {this.paintNotes()}
    </section>;
  }
}


export default ListNews;
