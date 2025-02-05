import { useState } from "react";
const useCounter = () => {

    const [count, setCount] = useState(0);

    // handleClick function-> this helps us debug, and understand the point of the function
    const handleIncrease = () => {
        setCount(count + 1);
    } 
    
    // Requirements:
    // Reset Button, this will reset the counter back to zero
    const handleReset = () => {
        setCount(0);
    }
    // decrease button, this will decrease the count => count - 1
    const handleDecrease = () => {
        setCount(count - 1);
    }
    // Increase by 5, increase/decrease by a random number

    //Return what we need for our Counter component

    return {count, handleDecrease, handleIncrease, handleReset};

}

export default useCounter;