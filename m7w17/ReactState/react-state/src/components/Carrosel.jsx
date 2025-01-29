import { useState } from 'react';

function Carrosel() {
    const animals = ["Tiger", "Eagle", "Elephant", "Monkey", "Snake"];
    // All hooks are functions
    // We can't call hooks anywhere
    // const state = useState();
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        if(animals.length > index + 1){
            return setIndex(index + 1)
        }
        setIndex(0)
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
            <h2>{animals[index]}</h2>
            {/* For onClick events we should pass it in as a reference or as a callback, or else React will call the function */}
            <button onClick={()=>handleClick()}>Next Animal</button>
        </div> 
     );
}

export default Carrosel;