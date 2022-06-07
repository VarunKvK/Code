import React, { useState } from "react";
import Movie from './Movie';
 
const MovieList=  () =>{

    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.Rate} key={movie.id} />
            ))}
        </div>
    );
}

export default MovieList;