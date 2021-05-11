import './App.css';
import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      formula: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      // als er geen operator wordt gebruikt, display dan de input 
      let string = this.state.formula
      if (!(string.includes("+")) && !(string.includes("-")) && !(string.includes("/")) && !(string.includes("*"))){
        this.setState({
          formula: string
        })
        return;
      }
      else {
        this.calculate()
      }
    }
    else if (button === "C") {
      this.clear()
    }
    else {
      this.setState({
        formula: this.state.formula + button
      })
    }
  }

  calculate = () => {
    let string = this.state.formula
    let formula = [...string]
    let operator = ""
    let index_operator = 0

    // bewaar operator en index
    for (let i = 0; i < formula.length; i++) {
      if (formula[i] === "+" || formula[i] === "-" || formula[i] === "/" || formula[i] === "*") {
          operator = formula[i];
          index_operator = i;
      }
    } 

    // bewaar eerste en tweede nummer 
    let number = []
    for (let j = 0; j < index_operator; j++) {
        number.push(formula[j]);
    }
    const first_number = parseFloat(number.join(''));

    let number_two = [];
    for (let k = index_operator + 1; k < formula.length; k++) {
        number_two.push(formula[k]);
    }
    const second_number = parseFloat(number_two.join(''));

    // bereken oplossing
    let solution = 0
    if (operator === '+') {
      solution = first_number + second_number
    }
    else if (operator === '-') {
      solution = first_number - second_number
    }
    else if (operator === '/') {
      solution = first_number / second_number
    }
    else {
      solution = first_number * second_number
    }

    // verander state
    this.setState({
      formula: solution
    }) 
  }

  clear = () => {
    this.setState({
      formula: ""
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <h1>Calculator</h1>
          <input className="display" type="text" value={this.state.formula} disabled/>
          <Calculator onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;