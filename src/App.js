import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Fer', age: 22 },
      { name: 'Eri', age: 55 },
      { name: 'Manuel', age: 50 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
  //  console.log('Was clicked');
  // DON`T DO THIS: this.state.persons[0].name = 'Fernanda'
  this.setState({
    persons: [
      { name: newName, age: 22 },
      { name: 'Eri', age: 55 },
      { name: 'Manuel', age: 52 }
    ]
  })

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Fer', age: 22 },
        { name: event.target.value, age: 55 },
        { name: 'Manuel', age: 50 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <button onClick={() => this.switchNameHandler('Fernanda')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} click={this.switchNameHandler}click={this.switchNameHandler.bind(this, 'Fer')}
        changed={this.nameChangedHandler} >My hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
