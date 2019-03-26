import React, { Component } from 'react';

import PropTypes from 'prop-types';
import logo from './global/images/logo.svg';
import './global/css/Header.css';
import {Link} from 'react-router-dom'

class App extends Component {
  static propTypes= {

    title:PropTypes.string.isRequired,
    items:PropTypes.array.isRequired,
    copiright:PropTypes.array.isRequired,
  

  }

  render() {
    console.log('prop-types',this.props);
    const { title, items, copiright } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1> {copiright}</h1>

          <ul className="Menu">

          {items && items.map(
            (item, key)=> <li key= {key}><Link to={item.url}>{item.title}</Link></li>
            )}

          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
