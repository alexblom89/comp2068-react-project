import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
    let search = 'the+matrix';
    //let API = 'http://www.omdbapi.com/?apikey=' + process.env.REACT_APP_OMDB_API_KEY + '&?t=' + search;
    const [data, setData] = useState([]);
    const movie = useMemo(() => data, [data]);
    //http://www.omdbapi.com/?i=tt3896198&apikey=9eca256d
    useEffect(() => {
        axios.get('http://www.omdbapi.com/?t=' + search + '&apikey=' + process.env.REACT_APP_OMDB_API_KEY)
             .then(resp => {
                 setData(resp.data);
             });
    }, []);

    //Title, Year, Released, Runtime, Director, Actors, Plot, Poster
    return (
        <>
            <div>
                <div className="col my-5">
                    <div 
                        className="card my-2"
                        style={{ width:'30rem' }}
                    >
                        <div className="card-body">
                            <h3 className="card-title">{movie.Title}</h3>
                            <h4 className="card-subtitle">Release Date: {movie.Released}</h4>
                            <ul className="list-group list-group-flush">  
                                <li className="list-group-item">Runtime: {movie.Runtime}</li>
                                <li className="list-group-item">Director: {movie.Director}</li>
                                <li className="list-group-item">Actors: {movie.Actors}</li>
                                <li className="list-group-item">Plot: {movie.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data;