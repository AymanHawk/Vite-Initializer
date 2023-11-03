import '/src/css/Person.css';
import React from 'react';
import { useState } from 'react';
 
function Person(){
    const [person, setPerson] = useState({name: 'Ayman', age: 21});

/*    const handleIncreaseAge1= () => {
        const newIncPerson = { ...person, age: person.age + 1 };
        setPerson(newIncPerson);
    }
*/
    // simplified version of ^ function

    const handleIncreaseAge = () => {
        console.log("before setPerson call", person);
        setPerson({ ...person, age: person.age + 1});
        console.log("after setPerson call", person);
    }

    console.log("during render", person)

    const handleDecreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age - 1}));
        //setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age - 1}));
    }

    return(
        <div className = 'person-component'> 
            <h1> {person.name} </h1>
            <h2> {person.age} </h2>
            <button id = 'left-button' onClick={handleIncreaseAge}> Increase Age </button>
            <button onClick={handleDecreaseAge}> Decrease Age </button>
        </div>
    )
}

export default Person;