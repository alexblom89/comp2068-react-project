import React from 'react';

const Header = (props) => {
    return ( 
        <header className="bg-dark p-5 rounded-lg m-3 text-center">
            <h1 className="text-white">{props.title}</h1>
        </header>
     );
}
 
export default Header;