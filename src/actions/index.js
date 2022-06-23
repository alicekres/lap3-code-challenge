import axios from 'axios';

const loading = (userName) => ({ type: 'LOADING', payload: userName });

export const fetchGitRepo = (searchTerm) => {
    return async (dispatch) => {
        dispatch(loading(searchTerm));
        try {
            const { data } = await axios.get(
                `https://api.github.com/users/${searchTerm}/repos`
            );
            dispatch({
                type: 'LOAD_REPOS',
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err,
            });
        }
    };
};
