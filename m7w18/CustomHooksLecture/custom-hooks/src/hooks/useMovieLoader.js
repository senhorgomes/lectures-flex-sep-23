import { useState, useEffect } from "react";

const useMovieLoader = () => {

    const [movieList, setMovieList] = useState([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    // https://swapi-37eac-default-rtdb.firebaseio.com/movies.json
    // create a fetch function and parse the information, then set it to state
    // 1. A callback function, or what you want to execute after the first initial render
    // 2. when you want this callback function to be executed
    useEffect(()=> {
        // Execute the code within here once, and only once after the intial render
        fetch("https://swapi-37eac-default-rtdb.firebaseio.com/movies.json")
        .then((res)=> res.json())
        .then((data)=> {
            setMovieList(data);
            setIsLoading(false);
        })
        // Dependecy array
        // If the array is empty, the useEffect will only be triggered once after render
        // Hey useEffect, listen to any variable in this array, if they change, retrigger your useEffect
    }, [])

    const handleNextMovie = () => {
        // If we reach the end of the array, start from the 0 index again
        if(movieList.length === index + 1){
           return setIndex(0);
        }
        setIndex(index + 1);  
    }
    const handlePreviousMovie = () => {
        // If we reach the index 0, set it to the end of the array
        // 
        if(index === 0){
           return setIndex(movieList.length - 1);
        }
        setIndex(index - 1);  
    }

    return { isLoading, currentMovie: movieList[index], handleNextMovie, handlePreviousMovie}
}

export default useMovieLoader;