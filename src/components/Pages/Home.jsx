import React from 'react';
import Header from '../shared/Header';

const Home = () => {
    return ( 
        <>
            <div className="container">
                <Header title="COMP2068 React Project"/>
                <div className="container mx-auto" style={{ maxWidth:'960px' }}>
                    <p >Welcome to my 2021 JS Frameworks React Project. Here you are able to search any movie and some of that movie's information and its poster will be returned.</p>
                </div>
            </div>    
        </>
     );
}
 
export default Home;