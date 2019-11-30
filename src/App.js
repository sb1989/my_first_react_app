import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Yeye', age: 25},
      {name: 'Yaya', age: 29},
      {name: 'Wawa', age: 26}
    ]
  }

  switchNameHandler = () =>{
    console.log('Was clicked');
  }

  render() {
    return (
      //jsx
      <div className="App">
        <h1>Welcome to react</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].agee}>My hobby: Swimming</Person>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi I\'m a react App!!!'))
  }
}

export default App;
