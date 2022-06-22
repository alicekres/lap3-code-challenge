import axios from 'axios';

export const loading = username => ({ type: 'LOADING', payload: username});

export const loadResult = ({ results: { repos } }) => ({
    type: 'LOAD_RESULT',
    payload: { repos }
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const gitUser = await fetchGitUser(searchTerm)
            const gitRepo = await fetchGitRepo(gitUser)
            dispatch(loadResult(gitRepo))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};




