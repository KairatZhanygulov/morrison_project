import { useState, useEffect } from 'react'

import MovieItem from './MovieItem'

import movies from '../movies.json'

function Upcoming() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => (
          <MovieItem data={movie} />
        ))
      }
    </div>
  );
}

export default Upcoming;
