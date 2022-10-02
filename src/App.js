import './App.css';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'; //para enrutar
import {userContext} from './context/userContext';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


import '../src/styles/styles.scss';


function App() {

  const [user, setUser] = useState(""); //setUser, nodifica el estado de user


//-------Funciones del proveedor -------//

const login = (name) => {
  setUser(name); //aquí le decimos que user = name; user es la variable de arrina
};

const logout= () => {
  setUser(""); //aquí le decimos que el user está vacío
}


//Creamos objeto para enviar datos a los consumidores:
const data = {
  user, 
  login,
  logout
}

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
        <Header/>
        <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
