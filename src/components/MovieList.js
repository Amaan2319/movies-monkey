import React from 'react';

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-card ">
      {movies.length > 0 ? (
        <div className="row row-cols-1 my-3 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <div className="col col-md-3  my-3 ind-movie-card" key={movie.imdbID} >
              <div className="card border-secondary bg-dark">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h3 className="card-title text-white">{movie.Title}</h3>
                  <p className="text-white">{movie.Year}</p>
                  {/* Additional movie details */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};
