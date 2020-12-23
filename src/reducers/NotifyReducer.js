const initialState = {
    open: false,
    horizontal: 'center',
    vertical: 'top',
    class: 'error',
    time: 3000,
    msg: 'Dados atualizados'
}

const NotifyReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_OPEN':
            return { ...state, open:action.payload.open }
        
        case 'SET_HORIZONTAL':
            return { ...state, horizontal:action.payload.horizontal }
        
        case 'SET_VERTICAL':
            return { ...state, vertical:action.payload.vertical }
        
        case 'SET_TIME':
            return { ...state, time:action.payload.time }
        
        case 'SET_MSG':
            return { ...state, msg:action.payload.msg }
        
        default:
            return state;
    }
};

export default NotifyReducer;