import React, { useState } from "react";

function Input(){
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return(
        <div>
            <input onChange={handleInput} value={input}/>
            <p> {input} </p>
        </div>
    );
}

export default Input;