import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    // This useEffect only gets called once, upon the component being rendered on the Virtual DOM/DOM
    useEffect(()=> {
        // Fetch for data
    }, [])
    useEffect(()=> {
        // console.log("Functional component has been updated!")
    })

    const handleClick = () => {
        setCount(count + 1);
    }

    return ( 
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleClick}>Increase!</button>
        </>
     );
}

export default Counter;