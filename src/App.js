import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //jsx
      <div className="App">
        <h1>Welcome to react</h1>
        <p>This is working</p>
        <Person name='Mini' age = '29'/>
        <Person name = 'Maxi' age ='30'/>
        <Person name ='Lili' age ='25'>My hobby: Swimming</Person>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi I\'m a react App!!!'))
  }
}

export default App;
