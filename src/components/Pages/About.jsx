import React from 'react';
import Header from '../shared/Header';

const About = () => {
    return ( 
        <div className="container">
            <Header title="About"/>
            <div className="container mx-auto" style={{ maxWidth:'960px' }}>
                <p>This app has been created for COMP2068 using ReactJS and the OMDB API. The data page contains a search bar that will return a movie's information and poster.</p>
            </div>
        </div>
     );
}
 
export default About;