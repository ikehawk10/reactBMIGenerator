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

  heightChange(height){
    this.setState({
      height: height
    })
  }

  weightChange(weight){
    this.setState({
      weight: weight
    })
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
              <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
            <label>Weight</label>
              <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>

          </div>
        </form>
        <br /><br />
        <Output />
      </div>
    );
  }
}

export default App;
