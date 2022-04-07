import React from 'react'
import './MoviesList.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesData from '../MoviesData/Data'
const MoviesList = ( {data , title , rate} ) => {
    console.log(MoviesData)
  return (
    <div className='my-list'>
{
      data.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rating >=rate)
      .map((movie,index ) => <MovieCard movie= {movie} key = {index}/> )
}
    </div>
  )
}

export default MoviesList