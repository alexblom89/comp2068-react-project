import React from 'react';
import Header from '../shared/Header';

const Home = () => {
    return ( 
        <>
            <div className="container">
                <Header title="COMP2068 React Project"/>
                <p>Welcome to my 2021 JS Frameworks Project. Here you will find a list of movies from the Open Movie Database (http://www.omdbapi.com/). </p>
            </div>    
        </>
     );
}
 
export default Home;