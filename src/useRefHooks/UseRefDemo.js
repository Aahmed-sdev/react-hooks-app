import React, { useEffect, useRef, useState } from "react";

const UseRefDemo = ()=>{
    const [inputValue, setInputValue] = useState("");
    const renderCount = useRef(0); // Return object {current : 0}    
    const inputReference = useRef(null);
    useEffect(()=>{
        console.log("useRef demo :: Inside useEffect")
        renderCount.current = renderCount.current + 1;
        //console.log(inputReference);
    })

    const handleOnChange = ()=>{
        console.log(inputReference.current.value);
    }

    return (
        <div>
            <p>useRef hook demo</p>
            Render Count : {renderCount.current}
            <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
            <input ref={inputReference} onChange={handleOnChange}></input>
        </div>
    )
}

export default UseRefDemo;