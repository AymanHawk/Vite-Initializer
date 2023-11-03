import { useEffect, useState } from "react";

function CountSecrets(){
    const [secret,setSecret] = useState({value: "", countSecrets: 0});

    useEffect(() => {
        if(secret.value === 'secret'){
            setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
        }
    }, [secret.value]/** when secret.value changes -> component will rerender */);

    const onChangeHandler = ({target}) => {
        setSecret(s => ({...s, value: target.value}));
    };

    return(
        <div>
            <input 
                type="text" 
                value={secret.value}
                onChange={onChangeHandler}
            />
            <div>Number of Secrets: {secret.countSecrets}</div>
        </div>
    );
}

export default CountSecrets;