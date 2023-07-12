import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const NewMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesByYear = async (query) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=e67d1e1a`);
      setMovies(response.data.Search || []);
      console.log(query);
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const query = 'indiana jones';
    fetchMoviesByYear(query);
  }, []);

  return (
    <div className='container bg-dark text-white'>
      {movies.length > 0 ? (
        <div className='row my-5'>
          {movies.map((movie) => (
            <div className="col col-md-3 col-6 my-3 ind-movie-card" key={movie.imdbID}>
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
