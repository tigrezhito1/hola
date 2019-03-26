import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './global/css/Content.css';

class Content extends Component {
  static propTypes={

    body:PropTypes.object.isRequired
  }

    render() {
        const{body}=this.props;


console.log('hola....')
    return (
      <div className="Content">
     {body}
      </div>
    );
  }
}

export default Content;

