const initialState = {
    token: false,
}

const AuthReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token:action.payload.token }
        default:
            return state;
    }
    
};

export default AuthReducer;