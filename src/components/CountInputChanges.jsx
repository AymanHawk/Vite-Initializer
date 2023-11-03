import { React, useEffect, useRef, useState } from "react";

function CountInputChanges(){
    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);
    // ^ this can be changed with useRef()
    const countRef = useRef(0);

    //useEffect(() => setCount(count + 1), [value]);

    const onChangeHandler = ({target}) => {
        setValue(target.value);
        countRef.current++;
    };

    // if(count === 100){
    //     return(<h1>PASSED</h1>);
    // }

    return(
        <div>
            <input 
                type="text" 
                value={value}
                onChange={onChangeHandler}
            />
            <div>Number of changes: {countRef.current}</div>
        </div>
    );
}

export default CountInputChanges;