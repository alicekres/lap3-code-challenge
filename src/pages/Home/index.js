import React from 'react';
import './style.css';

import SearchForm from '../../components/SearchForm';

export const Home = () => {
    return (
        <div className="App">
            <ul> Repos </ul>
            <SearchForm />
        </div>
    );
};
