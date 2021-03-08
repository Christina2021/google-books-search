import React from 'react';
import Navbar from '../Navbar';

function Header(props) {
    return(
        <header>
            <Navbar />
            <div className="jumbotron jumbotron-fluid text-center p-5">
                <h1 className="display-4">Google Books Search</h1>
                <h5 className="mt-4">{props.headerText}</h5>
            </div>
        </header>
    )
}

export default Header;