// on every page

// import React, { useState } from 'react'


const Header = ({setPage}) => {
    return (
        <header>
            <div id="logo">Logo</div>
            Header
            <nav>
                <ul className="flex">
                    <li className="mr-6" onClick={() => setPage('about')}><a href="#">About me</a></li>
                    <li className="mr-6" onClick={()=>setPage('contact')}><a href="#">Contact me</a></li>
                    <li className="mr-6" onClick={() => setPage('resume')}><a href="#">Resume</a></li>
                    <li className="mr-6" onClick={() => setPage('portfolio')}><a href="#">Portfolio</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;