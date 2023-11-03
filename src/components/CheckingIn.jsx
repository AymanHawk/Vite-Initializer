import { useState } from "react";

function CheckingIn(){
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e){
        setFirstname(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <div>
            <h2>Let's check you in </h2>
            <label>
                First name: {' '}
                <input  
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label> {' '}
            <label>
                Last Name: {' '}
                <input 
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </div>
    );
}

export default CheckingIn;