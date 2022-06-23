const initState = { repos: [], loading: false };

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, userName: action.payload, loading: true };
        case 'LOAD_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
                error: false,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
                repos: [],
            };
        default:
            return state;
    }
};
