import axios from 'axios';

export const loading = (username) => ({ type: 'LOADING', payload: username });

export const loadResult = ({ results: { repos } }) => ({
    type: 'LOAD_RESULT',
    payload: { repos },
});

// export const getResult = (searchTerm) => {
//     return async (dispatch) => {
//         dispatch(loading(searchTerm));
//         try {
//             const gitUser = await fetchGitUser(searchTerm);
//             const gitRepo = await fetchGitRepo(gitUser);
//             dispatch(loadResult(gitRepo));
//         } catch (err) {
//             console.warn(err.message);
//             dispatch({ type: 'SET_ERROR', payload: err.message });
//         }
//     };
// };

// export const fetchGitUser = async (searchTerm) => {
//     try {
//         console.log(searchTerm);
//         let opts = { headers: { Accept: 'application/json' } };

//         const { data } = await axios.get(
//             `https://api.github.com/users/${searchTerm}`,
//             opts
//         );

//         return data.login;
//     } catch (err) {
//         // if (data.status === 404) { throw Error('That\'s not a valid username!')}
//     }
// };

export const fetchGitRepo = (searchTerm) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://api.github.com/users/${searchTerm}/repos`
            );

            console.log(data);
            // let newReposArray = data.map(
            //     (id, allow_forking, forks, open_issues, size) => ({
            //         id,
            //         allow_forking,
            //         forks,
            //         open_issues,
            //         size,
            //     })
            // );
            // console.log(newReposArray);
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
// async (searchTerm) => {
//     try {
//         let opts = { headers: { Accept: 'application/json' } };
//         const { data } = await axios.get(
//             `https://api.github.com/users/${searchTerm}/repos`,
//             opts
//         );
//         console.log(data);
//         return data;
//     } catch (err) {
//         throw new Error(err.message);
//     }
// };
