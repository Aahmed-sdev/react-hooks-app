import React , {useMemo, useState} from 'react'
/*
useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
*/

const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //const calculation = expensiveCalculation(count);

    /*
        Tell React to cache your calculation between re-renders...
    */
    const calculation = useMemo(
        ()=>{expensiveCalculation(count)},
        [count]   // ...so as long as these dependencies don't change...
    );

    function addTodo(){
        setTodos((t)=>[...t, "To-Do"+Math.random()])
    }

    return (
        <>
            <div>
                {
                    todos.map((todo, index)=>{
                        return <p key={index}>{todo}</p>
                    })
                }
                <button onClick={addTodo}>Add to-do</button>
            </div>
            <div>
                {count}<button onClick={()=>{setCount(count+1)}}>+</button>
            </div>
            <div>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

export default UseMemoDemo;