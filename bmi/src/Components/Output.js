import React, { Component } from 'react';

class Output extends Component {
	toFeet(num) {
		let realFeet = ((num * 0.393700) / 12);
		let feet = Math.floor(realFeet);
		let inches = Math.floor((realFeet - feet) * 12);
		return `${feet}'${inches}"`;
	}

	toPounds(num){
		let nearExact = num/0.45359237;
		let lbs = Math.floor(nearExact);
		return lbs;
	}

  render() {
  	let height = this.toFeet(this.props.data.height);
  	let weight = this.toPounds(this.props.data.weight);
  	let bmi = this.props.data.bmi;
  	let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
      	<h3>{height}</h3>
      	<h3>{weight} lbs</h3>
      	<h3>{bmi}</h3>
      	<h3 className=
      		{(this.props.data.bmiClass === "Obese") ? "danger" : ""}>{bmiClass} 
      		{(this.props.data.bmiClass === "Obese") ? <a href='http://someproductsite.com'> What can I do?</a> : ""}</h3>
      </div>
    );
  }
}

export default Output;
