const initialState = {
    open: false,
    msg: 'Carregando...'
}

const LoadingReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_LOADING':
            return { ...state, open:action.payload.open }
        case 'SET_MSG_LOADING':
            return { ...state, msg:action.payload.msg }
        default:
            return state;
    }
};

export default LoadingReducer;