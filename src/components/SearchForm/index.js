import React, { useState, useEffect } from 'react';



function SearchForm({ getResult }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        getResult(username);
    }

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input)
    }

    // useEffect(() => {
    //     getResult("GMillerMc")
    // }, [])
    
    
    return (
        <form aria-label='form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input id='username' type="text" value={username} onChange={updateInput} />
            <input type="submit" 
            value={"Search"} />
            
        </form>
    );
};

export default SearchForm;
