import React from 'react';
import { Movie } from './Movie';

function Movies({movies}) {
    console.log(movies)
    return <div className='movies'>
        { 
            movies.map(movie => <Movie key={movie.imdbID} {...movie} />) 
        }
    </div>
}

export { Movies };
