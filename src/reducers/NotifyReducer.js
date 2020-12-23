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
        break;
        case 'SET_HORIZONTAL':
            return { ...state, horizontal:action.payload.horizontal }
        break;
        case 'SET_VERTICAL':
            return { ...state, vertical:action.payload.vertical }
        break;
        case 'SET_TIME':
            return { ...state, time:action.payload.time }
        break;
        case 'SET_MSG':
            return { ...state, msg:action.payload.msg }
        break;
    }

    return state;
};

export default NotifyReducer;