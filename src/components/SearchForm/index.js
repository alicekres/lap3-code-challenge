import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './index.module.css';

function SearchForm({ fetchGitRepo }) {
    const [username, setUsername] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        fetchGitRepo(username);
        setUsername('');
    };

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    return (
        <form aria-label="form" onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="username"></label>
            <AiOutlineSearch className={styles.icon} />
            <input
                id="username"
                type="text"
                value={username}
                onChange={updateInput}
                placeholder="Find a repository..."
                className={styles.input}
            />
            <input type="submit" value={'Search'} />
        </form>
    );
}

export default SearchForm;
