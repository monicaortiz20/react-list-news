import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { Card } from '../ListNews/Card';


export class ListNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  news
    }
  }


  paintNotes(){
    // return this.state.news.map((note,i)=><Card news={note} key={uuidv4()} delete={() => this.deleteNew(i)} />)
  }


  render() {
    return <section>
      <h2>Noticias</h2>
      {/* {this.paintProducts()} */}
    </section>;
  }
}

export default ListNews;
