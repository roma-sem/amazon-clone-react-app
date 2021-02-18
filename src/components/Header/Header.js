import React from 'react';
import './Header.scss';
import NavLogo from './NavLogo/NavLogo';
import SearchBar from './SearchBar/SearchBar';
import Nav from './Nav/Nav';

export default function Header () {
    return(
        <div className="Header">
            <NavLogo />
            <SearchBar />
            <Nav />
        </div>
    )
}
