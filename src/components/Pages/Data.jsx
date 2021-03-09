import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const movie = useMemo(() => data, [data]);

    const handleChange = event => {
        setSearch(event.target.value);
    }

    const handleClick = () => {
        axios.get('http://www.omdbapi.com/?t=' + search + '&apikey=' + process.env.REACT_APP_OMDB_API_KEY)
                .then(resp => {
                    setData(resp.data);
        });
    }
    

    //Title, Year, Released, Runtime, Director, Actors, Plot, Poster
    return (
        <>
            <Header title="Movie Search"/>
            <div className="container align-items-center">
                <div className="row my-2 align-items-center">
                    <div className="col-auto ml-auto">
                        <input type="text" value={search} name="search" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="col-auto mr-auto">
                        <button className="btn btn-primary" onClick={handleClick}>
                            Search
                        </button>

                    </div>
                </div>
            </div>
            <div 
                className="card mx-auto"
                style={{ maxWidth:'1000px' }}
            >
                <div className="row">
                    <div class="col-md-8 mx-1">
                        <div className="card-body">
                            <h3 className="card-title text-center">{movie.Title}</h3>
                            <ul className="list-group list-group-flush">  
                                <li className="list-group-item"><strong>Release Date: </strong>{movie.Released}</li>
                                <li className="list-group-item"><strong>Runtime: </strong>{movie.Runtime}</li>
                                <li className="list-group-item"><strong>Director: </strong>{movie.Director}</li>
                                <li className="list-group-item"><strong>Actors: </strong>{movie.Actors}</li>
                                <li className="list-group-item"><strong>Plot: </strong>{movie.Plot}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <img src={movie.Poster} alt="Movie Poster"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data;