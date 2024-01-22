import React, {useState} from "react";
const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Jack")

    const increament = ()=>{
        setCounter(counter + 1)
    }
    const onInputChange = (event)=>{
        const newValue = event.target.values;
        setInputValue(newValue)
        
    }
    return (
        <React.Fragment>
            <div>
                {counter}<button onClick={increament}>Increament</button>
            </div>
            <input placeholder="enter something.." onChange={onInputChange}></input>
            {inputValue}
        </React.Fragment>
    )
}

export default StateTutorial