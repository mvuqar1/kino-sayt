import React, { useState } from 'react';
import './ListPage.css';
import { getListMovies } from '../../api/getSingleList';
import { useEffect } from 'react';
import { getMovies } from '../../api/getMovies';


const ListPage = (props) => {

    const [movies, setMovies] = useState([])
    const [moviesDetailed, setMoviesDetailed] = useState([])
    const { id } = props.match.params;

    useEffect(() => {
        getListMovies(id)
        .then(data => {
            setMovies(data.movies)
            // movies:  [
            //     {
            //         imdbID: 'dsadas',
            //         Title: 'dsfds',
            //         Year: '2020'
            //     },
            //     {
            //         imdbID: 'dsadas',
            //         Title: 'dsfds',
            //         Year: '2020'
            //     }
            // ]
        })
    }, [id])

    const getMoviesHandler = async (movies) => {

        const requests = movies.map(movie => getMovies('', movie.imdbID));
        Promise.all(requests).then(data => {
            setMoviesDetailed(data)
            console.log('data: ', data)
        })
    }

    const findDetails = (movieId) => {
        const movieDetails = moviesDetailed.find(movie => movie.imdbID === movieId)
        if (movieDetails) return movieDetails
    }
    useEffect(() => {
        if (movies.length) {
            getMoviesHandler(movies)
        }

    }, [movies])

    console.log('props: ', props)
    
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {movies.map((item) => {
                        const movieDetails = findDetails(item.imdbID)
                        return (
                            <li className='movie-card' key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`}rel="noopener noreferrer" target="_blank">{item.Title} ({item.Year})</a>
                                {
                                    movieDetails && (
                                        <p>{movieDetails.Actors}</p>
                                    )
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
}
 
export default ListPage;