const initialState = {
    open: false,
    msg: 'Carregando...'
}

const LoadingReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_MODAL':
            return { ...state, open:action.payload.open }
        default:
            return state;
    }
};

export default LoadingReducer;