import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components/';
import { getResult } from '../../actions/index';

import './style.css';


export const Home = () => {
    const result = useSelector(state => state.result);
    const username = useSelector(state => state.username);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();
    
    const search = (searchTerm) => dispatch(getResult(searchTerm));

    // const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result} />

    const data = useSelector(state => state.username)

    return(
        
        <div className="App">
            Who do you want to search?
            <SearchForm getResult={search}/>

            <h1>{data}</h1>
            
            {/* { error ? <p role="alert">Oops there's been an error! {error}</p> : (renderResult() )}    */}
            
        </div>
            
            
        
    
    )
}
