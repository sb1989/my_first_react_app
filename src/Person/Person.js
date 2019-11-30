import React from 'react' //jsx is tranformed to react createElement

const person = (props)=>{
return <p>Return jsx from Person! I'm {props.name}, {props.age} year old</p>
};

export default person;