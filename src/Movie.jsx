import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Movie() {

    const link = 'https://image.tmdb.org/t/p/w500'

    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [])

    console.log(movie)

    if (!movie) return null

    return (
        <div className="movie">
            <img src={link + movie.poster_path} />
            <div className="text">
              <h1>{movie.title}</h1>
              <p>Обзор: {movie.overview}</p><br />
              <p>Дата выхода: {movie.release_date}</p><br />
              <p>Длительность фильма: {movie.runtime} минут</p><br />
              <p>Средняя оценка фильма: {movie.vote_average}</p><br />
              <p>Статус фильма: {movie.status}</p><br />
            </div>            
        </div>
    )
}

export default Movie