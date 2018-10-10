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
    otherState: 'some other value',
    showPersons: false
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

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <h5>This is really working</h5>
        <button 
          style={style}
          //onClick={() => this.switchNameHandler('Fernanda')}
          onClick={this.tooglePersonsHandler}
        >Switch Name</button>
      {this.state.showPersons ? 
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Fer')}
          changed={this.nameChangedHandler} >My hobbies: Racing</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div> : null
      }
      </div>
    );
  }
}

export default App;
