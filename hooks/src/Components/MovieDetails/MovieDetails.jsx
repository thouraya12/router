
import React, { useState , useEffect} from 'react'
import MoviesData from '../MoviesData/Data'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
    const [ movie , setMovie]=useState({})
    const params=useParams()
    useEffect(()=>{
        setMovie(MoviesData.find( movie=>movie.id === params.id))

    }, [params.id])
  return (
    <div>

        <h1> movie details </h1>
        <h1>{movie.title}</h1>
        <iframe width="560" height="315" src={movie.trailer}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
       <button onClick= {()=>navigate ('/')}>Go home</button>
    </div>
  )
}

export default MovieDetails