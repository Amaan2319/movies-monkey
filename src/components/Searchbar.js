import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieList } from './MovieList';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchDefaultMovies = async () => {
    try {
      const response = await axios.get('https://www.omdbapi.com?s=avengers&apikey=e67d1e1a');
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://www.omdbapi.com?s=${encodeURIComponent(query)}&apikey=e67d1e1a`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='my-4'>
      <form action="" onSubmit={handleSubmit} className="search-form input-group " style={{marginTop: '7rem'}}>
        <input
          type="text"
          className="form-input form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search a movie"
        />
        <button type="submit" className="btn btn-warning">
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};
