const initState = { username: "", result: "" };

export const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING' :
            return {...state, username: action.payload, loading: true, error: false};
        case 'LOAD_RESULT':
            return {...state, result: action.payload, loading: false, error: false};
        case 'SET_ERROR':
            return {...state, error: action.payload, loading: false}
        default:
            return initState;
    };
};
