import {useState} from 'react';

function TrafficLight(){
    const [walk, setWalk] = useState(true);

    function handleClick(){
        setTimeout (() => {
            setWalk(!walk);
            alert(walk ? 'Stop is next' : 'Walk is next');
        }, 500)
}

    return(
        <div>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{color: walk ? 'darkgreen' : 'red'}}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </div>
    )
}

export default TrafficLight;