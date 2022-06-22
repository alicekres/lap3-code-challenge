import React from 'react';
// import './style.css';


export default function ({ result }) {
    return (
        <section>
        <div id="username">
            <h3>{result.name}</h3>
        </div>

        <div id="repos">
            <p>Description: {result.description}</p>
            <p>Forks:{result.forks_count}</p>
            <p>Watchers:{result.watchers_count}</p>
            <p>Open Issues:{result.open_issues}</p>
            <p>Created:{result.created_at.slice(0,10)}</p>
            <p>Last Updated:{result.updated_at.slice(0,10)}</p>
        </div>
        </section>
    )
}
