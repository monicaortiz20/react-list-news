import React, { Component } from "react";
import axios from "axios"; //para el fetch
import { v4 as uuidv4 } from 'uuid';
import Card from './Card'


export class ListNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      ListNews: []
    }
  }


  //----- Funciones propias de este componente -----//

  async componentDidMount(){
    this.getNews();
    
  }

  getNews = async() => {
    const response = await axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_API_KEY}`);
    const data = await response.data.response.docs; 
    //nos devuelve la info en formato .json
    //para obtener copia de una parte del array principal, empezando por inicio (0)
    const dataArray = data.slice(0,6)
    const allNews = [...dataArray, ...this.props.data.news]

    this.setState({
      ListNews:allNews
    })
  }


  deleteNew = (i) => {
   const remainingNews = this.state.ListNews.filter((note, j) =>  i !== j)
   this.setState({ListNews:remainingNews})
  }

  render() {
    //para que nos saque el array con todas las noticias: fetch + creadas
    const allNews = this.state.ListNews

    return <section>
      <h1>Noticias</h1>
      {
      allNews.map((notes,i)=> <Card news={notes} delete={()=>this.deleteNew(i)} key={uuidv4()} />)
      }
    </section>;
  }
}


export default ListNews;
