import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="container col-md-4 mt-3">
            <ul className="nav justify-content-center">
                <li className="nav-item mx-2 bg-dark px-1 rounded-lg">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item mx-2 bg-dark px-1 rounded-lg">
                    <Link to="/about">About</Link>
                </li>
                
                <li className="nav-item mx-2 bg-dark px-1 rounded-lg">
                    <Link to="/data">Data</Link>
                </li>
                
            </ul>
        </div>
     );
}
 
export default Navigation;