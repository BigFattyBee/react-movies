import React from 'react';

function Movie({Title, Year, imdbID, Type, Poster}) {
    return (
        
        <div id={imdbID} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A'
                    ? <img className='activator' alt={Title} src={`https://placehold.co/250x360?text=${Title}`} />
                    : <img className="activator" alt={Title} src={Poster} />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {Title}
                </span>
                <p>{Year} <span className='right'>{Type}</span></p>
            </div>
        </div>
          
    )
}

export { Movie };
