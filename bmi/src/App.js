import React, { Component } from 'react';
import './App.css';
import Range from "./Components/Range";
import Output from "./Components/Output";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Average'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
              <Range />
            <label>Weight</label>
          </div>
        </form>
        <br /><br />
        <Output />
      </div>
    );
  }
}

export default App;
