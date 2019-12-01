import React from 'react' //jsx is tranformed to react createElement

const person = (props)=>{
return (
        <div>
            <p onClick={props.click}>Return from jsx! I'm {props.name}, {props.age}year old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;