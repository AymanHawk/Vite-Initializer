import { useState } from 'react';
import '/src/css/CustomInput.css'

function CustomInput(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <div className='custom-input'>
            <input
                placeholder='First Name'
                type = "text"
                value = {firstName}
                onClick={ (event) => setFirstName(event.target.value) }
                onChange={e => setFirstName(e.target.value)}
            /> 
            {" "}
            <input
                placeholder='Last Name'
                type = "text"
                value = {lastName}
                onClick={ (event) => setLastName(event.target.value) }
                onChange={e => setLastName(e.target.value)}
            />
            <h3> {firstName} {' '} {lastName} </h3>
        </div>
    )
}

export default CustomInput;