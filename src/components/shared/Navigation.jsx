import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/data">Data</Link>
            </li>
            
        </ul>
     );
}
 
export default Navigation;