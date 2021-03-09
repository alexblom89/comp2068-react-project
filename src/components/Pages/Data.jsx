import React, { useMemo, useState } from 'react';
import Header from '../shared/Header';
import CardListItem from '../Cards/CardListItem';
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
            <div className="container">
                <Header title="Movie Search"/>
                <div className="container align-items-center">
                    <div className="row my-3 align-items-center">
                        <div className="col-auto ml-auto">
                            <input type="text" value={search} name="search" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="col-auto mr-auto">
                            <button className="btn searchBtn border border-dark" onClick={handleClick}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div 
                    className="card mx-auto border border-dark"
                    style={{ maxWidth:'960px' }}
                >
                    <div className="row g-0">
                        <div class="col-md-8 mx-auto">
                            <div className="card-body">
                                <h3 className="card-title text-center">{movie.Title}</h3>
                                <ul className="list-group list-group-flush">
                                    <CardListItem label="Release Date: " props={movie.Released}/>
                                    <CardListItem label="Runtime: " props={movie.Runtime}/>
                                    <CardListItem label="Director: " props={movie.Director}/>
                                    <CardListItem label="Actors: " props={movie.Actors}/>
                                    <CardListItem label="Plot: " props={movie.Plot}/>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={movie.Poster} alt="Movie Poster"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data;