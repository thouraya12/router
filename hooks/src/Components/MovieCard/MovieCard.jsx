import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <div className='my-card'> 
    <Link to ={`/movie/${movie.id}`}>
        <img src={movie.posterUrl}/>
        </Link>
        <h1  style= {{color:"black"}}> {movie.title} </h1>
        <h1  style= {{color:"black"}}> {movie.description} </h1>
        <h4  style= {{color:"black"}}> {"🌟".repeat(movie.rating)}</h4>
    </div>
  )
}
export default MovieCard
