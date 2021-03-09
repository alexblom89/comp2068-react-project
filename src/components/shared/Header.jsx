import React from 'react';

const Header = (props) => {
    return ( 
        <header className="border border-lg border-dark p-3 rounded-lg my-3 mx-auto text-center" id="header"  style={{ maxWidth:'960px' }}>
            <h1 id="headerTitle">{props.title}</h1>
        </header>
     );
}
 
export default Header;