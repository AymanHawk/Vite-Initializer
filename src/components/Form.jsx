import { useState } from 'react';

function Form(){
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState("Howdy");

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
            }, 200);
    }

    return ( 
        <div>
        <form
            onSubmit={handleSubmit}>
                <label>
                    To: {"" /*only for adding a space between the ":" */ }
                    <select
                        value = {to}
                        onChange={e => setTo(e.target.value)}>
                        <option value = "Alice"> Alice </option>
                        <option value = "Bob"> Bob </option>
                    </select>
                    <br/>
                </label>
                <textarea
                    placeholder = "Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br/>
                <button type='submit'> Send </button>
            </form>
            <h3> {message} </h3>
            </div>
    )
}

export default Form;