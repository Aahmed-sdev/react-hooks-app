import React, {useEffect, useState} from 'react'

function UseEffectEDemo(){
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        console.log("Inside UseEffect")
        let timer = setTimeout(()=>{
            setCounter(counter+1)
        },1000)

        return ()=>{
            console.log("Calling cleanup");
            clearTimeout(timer)
        }
    },[count]);
    return <div>
        {count}<button onClick={()=>setCount(count + 1)}>+</button><br/>
        {counter}
    </div>
}

export default UseEffectEDemo;

/*
1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. Empty Dependency passed
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values as dependency: 
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

4. Effect cleanup
useEffect(()=>{
    ............
    return ()=>{.......}
},[]) 

*/