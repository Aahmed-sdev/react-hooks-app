import React, { createContext, useContext, useState } from 'react'
const userContext = createContext();


const ContextDemo = ()=>{
    const [user, setUser] = useState("");

    function handleChange(event){
        //console.log(event.target.value);
        setUser(event.target.value);
    }
    return (
        <>
            <userContext.Provider value={user}>
                <h2>{user}</h2><input onChange={handleChange}></input>
                <Component1 user={user}/>
            </userContext.Provider>
        </>
    )
}

const Component1 = ({user})=>{
    return (
        <div>
            Component 1
            <Component2 user={user} />
        </div>
    )
}

const Component2 = ({user})=>{
    return (
        <div>
            Component 2
            <div>{user}</div>
            <Component3 />
        </div>
    )
}

const Component3 = ()=>{
    return (
        <>
            <div>Component 3</div>
            <Component4 />
        </>

    )
}

const Component4 = ()=>{
    return (
        <>
            <div>Componennt 5</div>
            <Component5 />
        </>
    )
}

const Component5 = ()=>{
    const user = useContext(userContext);
    return (
        <>
            <div>Component 5</div>
            <div>Hello {user} !</div>
        </>
    )
}

export default ContextDemo;