import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

import news from '../../../assets/news.png';




class Home extends Component {
static contextType= userContext; //representa la info del proveedor desde js

constructor(props) {
  super(props)

  this.username = React.createRef();  //input html guarda el resultado

  this.state = {
     username: ""
  }
}

//----- Funciones propias de este componente -----//

sendUserName = () => {
  const data = this.context;
  
  data.login(this.state.username);

  //vaciamos input + state
  this.username.current.value = "";
  this.setState({ username: ""});

}

//modificamos la memoria del estado
  handleChange = () => {
    const username = this.username.current.value; //Leer campo por referencia
    this.setState({ username });
  }

  render() {
    return <div>
      <img src={news} alt="news" />

      <div>
        <h2>Introduce tu nombre</h2>
        <input type="text" placeholder="Introduce tu nombre" ref={this.username} onChange={this.handleChange}/>
        {this.state.username ? <button onClick={this.sendUserName}>Log in</button> : null}
      </div>
    </div>;
  }
}

export default Home;
