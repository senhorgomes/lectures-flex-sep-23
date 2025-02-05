import { useEffect, useState } from "react";
import useMovieLoader from "../hooks/useMovieLoader";
function MovieViewer() {
    
    // import my custom hook
    const {
        // movieList,
        // index, 
        currentMovie,
        isLoading, 
        handleNextMovie, 
        handlePreviousMovie
    } = useMovieLoader();
    // Importing sample data, then a larger scale of the data: an Array of objects
    // We can implement the logic for the onClick buttons
    // We can implement the logic to fetch the information from the API
    if(isLoading){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <img src={currentMovie.poster} />
            <h1>{currentMovie.title}</h1>
            <h2>{currentMovie.alternate_title}</h2>
            <h3>Released: {currentMovie.release_year}</h3>
            <button onClick={handlePreviousMovie}>Previous Movie</button>
            <button onClick={handleNextMovie}>Next Movie</button>
        </>
    );
}

export default MovieViewer;
