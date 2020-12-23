const initialState = {
    open: false,
    class: 'success',
    time: 3000,
    msg: 'Dados atualizados'
}

const AlertReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_ALERT':
            return { ...state, open:action.payload.open }
        case 'SET_CLASS':
            return { ...state, class:action.payload.class }    
        case 'SET_TIME':
            return { ...state, time:action.payload.time } 
        case 'SET_MSG':
            return { ...state, msg:action.payload.msg } 
        default:
            return state;
    }
    
};

export default AlertReducer;