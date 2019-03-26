import React, { Component } from 'react';

import './global/css/Content.css';

class Content extends Component {
  constructor (){  
    super();
    this.state={
      count:0,
      number1:'',
      number2:'',
      result:0,
      multi:0,

  };
  this.handleCountClick=this.handleCountClick.bind(this);
  this.handleResultClick=this.handleResultClick.bind(this);
  this.handeInputChanged=this.handeInputChanged.bind(this);
  

}
componentDidMount()
{
  this.setState({
       count:1
});

} 

handleCountClick(e){
  console.log(e);
  if(e.target.id==='add'){
    this.setState({ 
      count: this.state.count+1
    }

    )
} else if 
(e.target.id==='subtract'&& this.state.count >0){
  this.setState({ 
    count: this.state.count-1
  }

  )
}else 
  this.setState({ 
    count: 0
  }

  )
}
handleResultClick(e){

  this.setState(
    {
      result: this.state.number1+this.state.number2,
      multi: this.state.number1*1,
     


    });
  
  }


  handeInputChanged(e){
    if(e.target.id==='number1')
    {
     this.setState(
      {
        number1: Number(e.target.value)
      
      });
    }else

    this.setState(
      {
        number2: Number(e.target.value)
      
      });

  }
    render() {
    return (
      <div className="Content">
      <h2>Counter:{this.state.count}</h2>
      <p>
        <button id='add' onClick={this.handleCountClick}>+</button>
        <button id='subtract' onClick={this.handleCountClick}>-</button>
        <button id='reset' onClick={this.handleCountClick}>Reset</button>

        <p>
          <input id="number1" type='number' value={this.state.number1} onChange={this.handeInputChanged} ></input>
          <input id="number2" type='number' value={this.state.number2} onChange={this.handeInputChanged} ></input>
          <button id="resuslt" onClick={this.handleResultClick}>=</button>
          <h2> {this.state.result}</h2>
          <h2>Tabla de Multiplicar</h2>
          <h2>{this.state.number1}x 1={this.state.multi}</h2>
          <h2>{this.state.number1}x 1={this.state.multi}</h2>
          



        </p>

      </p>
       <h1>Soy el ConTENiDo....XD</h1>
       <p>lorem .....xd</p>

      </div>
    );
  }
}

export default Content;

