import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from '../../components/';
import { fetchGitRepo } from '../../actions/index';

import './style.css';
import Repos from '../../components/Repos';

const Home = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);

    const search = (searchTerm) => dispatch(fetchGitRepo(searchTerm));

    return (
        <div className="home">
            <div className="firstpart">
                <p>Repositories</p>
                <p>Who do you want to search?</p>
            </div>
            <SearchForm fetchGitRepo={search} />
            {error ? (
                <h3>
                    <p>
                        Request to find a given GitHub user's repositories
                        failed!
                    </p>
                    <p>Check the spelling and try again!</p>
                </h3>
            ) : (
                <Repos />
            )}
        </div>
    );
};

export default Home;
