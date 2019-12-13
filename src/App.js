import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id : '112s', name: 'Yeye', age: 25},
      {id : '2s1', name: 'Yaya', age: 29},
      {id : '3213', name: 'Wawa', age: 26}
    ],

    showPerson: false
  }

  /*switchNameHandler = (newName) =>{
    //console.log('Was clicked');
    this.setState({persons : [
      {name: newName, age: 25},
      {name: 'Yaya', age: 29},
      {name: 'Wawa', age: 29}
    ]})
  }*/

  deletePersonHandler=(personIndex)=>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex((p)=> {
      return p.id === id; 
      }
    )
    console.log("index of person array: " + personIndex);
    
    //create new javascript object
    //should not direct modify the state directly
    const person = {...this.state.persons[personIndex]};

    person.name =event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons :persons})
  }
  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'red',
      border: 'black'
    }

    let persons = null;

    if(this.state.showPerson){
      persons = ( 
      <div style={style}>
        {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)} 
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed = {(event)=> this.nameChangedHandler(event, person.id)}/>
        })}
      </div> 
      );
    }
    return (
      //jsx
      <div className="App">
        <h1>Welcome to react</h1>
        <p>This is working</p>
        {/*<button onClick={this.switchNameHandler.bind(this, 'Yiyi')}>Switch Name</button>*/}
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi I\'m a react App!!!'))
  }
}

export default App;
