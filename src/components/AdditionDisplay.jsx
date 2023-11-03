import React, { useState, useEffect } from "react";

function AdditionDisplay(){
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const sum = number1 + number2;

    const handleNum1Change = (e) => {
        setNumber1(e.target.value);
    }
    const handleNum2Change = (e) => {
        setNumber2(e.target.value);
    }

    return(
        <div>
            <p> {(number1 || number1 === 0) ? number1 : 0} + {(number2 || number2 === 0) ? number2 : 0} = {sum} </p>
            <input
                type="number"
                value={number1}
                onChange={handleNum1Change}
            /> 
            + {" "}
            <input
                type="number"
                value={number2}
                onChange={handleNum2Change}
            />
        </div>
    );
}

export default AdditionDisplay;