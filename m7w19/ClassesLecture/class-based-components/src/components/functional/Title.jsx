import { useEffect } from "react";

function Title(props) {

    useEffect(()=> {
        // Whenever the component is removed from the DOM execute the code below
        // This is used to remove event listeners, or remove setIntervals
        return ()=> {
            console.log("I have been removed from the DOM")
        }
    }, [])

    return ( 
        <h1>{props.heading}</h1>
     );
}

export default Title;