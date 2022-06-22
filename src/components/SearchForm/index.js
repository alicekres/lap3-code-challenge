import React, { useState, useEffect } from 'react';

function SearchForm({ getResult }) {
    const [username, setUsername] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault;
        setSearchTerm(username);
        setUsername('');
    };

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    useEffect(() => {
        getResult(searchTerm);
    }, [searchTerm]);

    return (
        <form role="form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={updateInput}
            />
            <input type="submit" value={'Search'} />
        </form>
    );
}

export default SearchForm;
