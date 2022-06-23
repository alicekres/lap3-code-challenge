import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchForm } from '../../components/';
import { fetchGitRepo } from '../../actions/index';

import './style.css';
import Repos from '../../components/Repos';

const Home = () => {
    const dispatch = useDispatch();

    const search = (searchTerm) => dispatch(fetchGitRepo(searchTerm));

    return (
        <div className="home">
            <div className="firstpart">
                <p>Repositories</p>
                <p>Who do you want to search?</p>
            </div>
            <SearchForm fetchGitRepo={search} />
            <Repos />
        </div>
    );
};

export default Home;
