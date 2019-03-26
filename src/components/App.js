//Dependencias

import React, { Component } from 'react';
import PropTypes  from 'prop-types'; 


//Componentes
import './global/css/App.css';
import  Header from './Header';
import  Content from './Content';
// import  Footer from './Footer';

//DATA
import items  from './data/menu'
class App extends Component {

  static PropTypes ={
    children:PropTypes.object.isRequired
    
  }
  render() {
    const{children}= this.props;

    return (
      <div className="App">
       <Header title="Codejobs" items= {items} copiright="" />

       <Content body={children}/> 
       {/* <Footer copiright="Hola lo  agrege ....   xdxdxdxdxdxd" items= {items}/> */}
      </div>
    );
  }
}

export default App;
