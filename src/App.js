import './App.css';
import React, { useState } from 'react';
import Calculator from './components/calculator';

class App extends React.Component {

  // wat betekenen constructor() en super()? is dit om aan te geven dat dit de parent component is?

  constructor() {
    super();
    
    this.state = {
      result: "" 
    }

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        {this.state.result}
        <Calculator/>
      </header>
    </div>
    );
  }
}

export default App;