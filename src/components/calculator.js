import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    render() {
      return (
        <div className="buttons">
          <button className="button" name="1" onClick={event => this.props.onClick(event.target.name)}>1</button>          
          <button className="button" name="2" onClick={event => this.props.onClick(event.target.name)}>2</button>
          <button className="button" name="3" onClick={event => this.props.onClick(event.target.name)}>3</button>
          <button className="button" name="+" onClick={event => this.props.onClick(event.target.name)}>+</button><br/>

          <button className="button" name="4" onClick={event => this.props.onClick(event.target.name)}>4</button>
          <button className="button" name="5" onClick={event => this.props.onClick(event.target.name)}>5</button>
          <button className="button" name="6" onClick={event => this.props.onClick(event.target.name)}>6</button>
          <button className="button" name="-" onClick={event => this.props.onClick(event.target.name)}>-</button><br/>

          <button className="button" name="7" onClick={event => this.props.onClick(event.target.name)}>7</button>
          <button className="button" name="8" onClick={event => this.props.onClick(event.target.name)}>8</button>
          <button className="button" name="9" onClick={event => this.props.onClick(event.target.name)}>9</button>
          <button className="button" name="*" onClick={event => this.props.onClick(event.target.name)}>x</button><br/>

          <button className="button" name="." onClick={event => this.props.onClick(event.target.name)}>.</button>
          <button className="button" name="0" onClick={event => this.props.onClick(event.target.name)}>0</button>
          <button className="button" name="C" onClick={event => this.props.onClick(event.target.name)}>C</button>
          <button className="button" name="/" onClick={event => this.props.onClick(event.target.name)}>÷</button><br/>

          <button className="button_equal" name="=" onClick={event => this.props.onClick(event.target.name)}>=</button><br/>    
        </div>
      );
    }
}

export default Calculator;