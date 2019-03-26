import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './global/css/Footer.css';

class Footer extends Component {
  static propTypes= {

    copiright:PropTypes.array.isRequired,
    items:PropTypes.array.isRequired,
  

  }
  render() {
    console.log('prop-types',this.props);
    const { copiright, items } = this.props
    return (
      <div className="Footer">
        <p>Copiright ... derechos reservadoss...xd</p>

        <h1>
        {copiright}
        </h1>
        <ul className="Menu">

          {items && items.map((item, key)=> <li key= {key}>{item.title}</li>)}

          </ul>
      </div>
    );
  }
}

export default Footer;
