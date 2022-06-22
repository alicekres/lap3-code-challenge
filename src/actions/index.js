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

export const fetchGitUser = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}`);
        return data.user;
    } catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!')}
    }
}

export const fetchGitRepo = async ([user]) => {
    try {
        const { data } = await axios.get( `https://api.github.com/users/${searchTerm}/repos`);
        return data.repos;
    } catch (err) {
        throw new Error(err.message)
    }
}




