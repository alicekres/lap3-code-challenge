import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './index.module.css';

function SearchForm({ fetchGitRepo }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchGitRepo(username);
        setUsername('');
    };

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    return (
        <form
            aria-label="search"
            onSubmit={handleSubmit}
            className={styles.form}
        >
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
            <input type="submit" value={'Search'} className={styles.button} />
        </form>
    );
}

export default SearchForm;
