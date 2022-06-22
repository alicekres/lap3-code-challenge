import React from 'react';
import './style.css';


export const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
            {error
                ? <h1>Sorry, we could not find a {search} Repo</h1>
                : <div>
                <h3> {statusMessage ? statusMessage : true } </h3>
                <ul> {renderedRepos} </ul>
                </div>
            }
            </header>
        </div>
    )
}
