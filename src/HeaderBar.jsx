import React from 'react';
import { SearchBar } from './SearchBar';
import { User } from './User';

export const HeaderBar = () => {
    return(
        <div className="header-wrapper">
            <SearchBar />
            <User />
        </div>
    );
};