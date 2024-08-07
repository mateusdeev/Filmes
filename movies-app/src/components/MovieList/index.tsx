import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import MovieCard from '../MovieCard'
import { Movie } from '@/types/movie'
import ReactLoading from 'react-loading'

export interface MovieType {
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
    id: number,
}

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        getMovies()
        
    },[])
    const getMovies = async () => {
       await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '5d84639114c49c718351b776efad0d0c',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results)
            
        });

        setIsLoading(false)
    }
    if(isLoading) {
        return(
            <div className='loading-container'>
                  <ReactLoading type="spin" color='#6046ff' height={'5%'} width={'5%'} />
            </div>
        )
    }
  return (
    <ul className='movie-list'>
        {movies.map((movie) => 
            <MovieCard
                movie={movie}
                key={movie.id}
            />
           

        )}
    </ul>
  )
}

export default MovieList

