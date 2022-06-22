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
    try { console.log(searchTerm)
        let opts = { headers: { 'Accept': 'application/json' } }

        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}`, opts);
        console.log(data)
        return data.data;
    } catch (err) {
        // if (data.status === 404) { throw Error('That\'s not a valid username!')}
    }
}

export const fetchGitRepo = async searchTerm => {
    try {
        let opts = { headers: { 'Accept': 'application/json' } }
        const { data } = await axios.get( `https://api.github.com/users/${searchTerm}/repos`, opts);
        return data.public_repos;
    } catch (err) {
        throw new Error(err.message)
    }
}




