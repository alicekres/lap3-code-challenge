import React, { useState, useEffect } from 'react';



function SearchForm({ getResult }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault;
        getResult(username);
    }

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input)
    }

    useEffect(() => {
        getResult("")
    }, [])
    
    
    return (
        <form aria-label='form' onSubmit={handleSubmit}>
            <label htmlFor='location'>Location</label>
            <input id='location' type="text" value={location} onChange={updateInput} />
            <input type="submit" 
            value={"Search"} />
            
        </form>
    );
};

export default SearchForm;