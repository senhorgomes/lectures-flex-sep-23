import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Error = () => {
    const navigate = useNavigate();
    // We want to reroute users back to the home after a certain amount of time
    // useEffect(()=> {
    //     const returnUserToHomepage = setTimeout(()=> {
    //         // We want to reroute users back to the home
    //         navigate("/")
    //     }, 10000);

    //     return(()=> clearTimeout(returnUserToHomepage))
    // }, [])
    return(
        <>
            <h2>Hey, looks like you have landed on a route that doesn't exist!</h2>
            <h2>Please try again</h2>
        </>
    )
}