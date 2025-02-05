import { useState } from "react";
import useCounter from "../hooks/useCounter";


function Counter() {
            //getter, setter
            // state, setState
    // Import that hook in here
    //    [count, handleDecrease, handleIncrease, handleReset]
    const {handleDecrease, count, handleReset, handleIncrease} = useCounter();
 // Is a new instance of that function/custom hook
    return ( 
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>handleDecrease()}>-1</button>
            <button onClick={()=>handleReset()}>Reset</button>
            <button onClick={()=>handleIncrease()}>+1</button>
        </>
     );
}

export default Counter;