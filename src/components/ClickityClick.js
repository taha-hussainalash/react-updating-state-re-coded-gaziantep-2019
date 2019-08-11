// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: true
    };
  }

  handleClick = () => {
  this.setState({
    const house = {
  kitchen: {
    cabinets: 'white',
    table: {
      legs: 4
    }
  }
}
 
const updatedHouse = deepMerge(house, {
  kitchen: {
    table: {
      legs: 8
    }
  }
})
    
    hasBeenClicked: true
 () => console.log(this.state.hasBeenClicked))
  
}
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }


export default ClickityClick;