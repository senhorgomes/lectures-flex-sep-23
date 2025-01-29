import { useState } from 'react';

function Counter() {
    // All hooks are functions
    // We can't call hooks anywhere
    // const state = useState();
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // variable that will presist between renders
    // console.log(count)
    // a function that triggers renders
    // console.log(setCount)
    {/* New component that displays a count variable */}
    // let count = 0;
    {/* Button -> increase the value of count by +1 */}
    const handleClick = () => {
        // We never want to modify state directly
        // Previous state
        // setCount1(count1 + 1); // SetState is asynchronous, we can't await it
        setCount1((prev)=> prev + 1);


        // setState
        // setTimeout(()=> {
        //     // if we are troubleshooting state, please avoid using console.log
        //     console.log("new state: ",count1); // 1
        // }, 0)
        // console.log(count);
    }
    // A change is happening to the component but the component isn't picking up on the change

    // Local variables don't persist between renders

    // React will only change/update if we trigger it to change
    // Changes to local variables don't create a rerender of the component

    // We need a variable that persists between rerenders, and something to trigger a rerender
    // State -> useState
    return (
        <div>
            <h2>{count1}</h2>
            {/* For onClick events we should pass it in as a reference or as a callback, or else React will call the function */}
            <button onClick={()=>handleClick()}>Increase!</button>
            <h2>{count2}</h2>
            {/* For onClick events we should pass it in as a reference or as a callback, or else React will call the function */}
            <button onClick={()=>setCount2(count2 + 1)}>Increase!</button>
        </div> 
     );
}

export default Counter;