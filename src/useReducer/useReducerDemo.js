import React, { useEffect, useReducer, useState } from "react";
const initialState = {
    count    : 0,
    showText : true
}

const reducer = (state, action) =>{
    switch(action.type) {
        case "INCREMENT":
            return {count : state.count + 1, 
                    showText : state.showText};
        case "TOGGLE_SHOW_TEXT":
            return {count : state.count,
                    showText : !state.showText}
        default:
            return state
    }
}

const UseReducerDemo = ()=>{
    //const [counter, setCounter] = useState(0);
    //const [showText, setShowText] = useState(true);
    
    //Use Reducer is used to handle more than one state
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleClick(){
        //setCounter(counter+1);
        //setShowText(!showText);
    }
    useEffect(()=>{
        console.log("Use effect called")
    })

    return (
        <div>
            <hr/>
            <div>{state.count}</div><button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"TOGGLE_SHOW_TEXT"})}}>
                Toggle Text
            </button>
            <button onClick={()=>{
                dispatch({type:"INCREMENT"});
                dispatch({type:"TOGGLE_SHOW_TEXT"})
            }}>Increment and Toggle Text</button>
            {state.showText && <div>This is text</div>}
            <div>{JSON.stringify(state)}</div>
        </div>
    )
}

export default UseReducerDemo;