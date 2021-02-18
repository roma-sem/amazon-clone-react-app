import React from 'react';
import './SearchBar.scss';
// import SearchButton from './SearchButton/SearchButton';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {
    return(
        <div className="SearchBar">
            <input type="search" />
            <SearchIcon className="SearchIcon" />
        </div>
    );
}

// <SearchButton />
