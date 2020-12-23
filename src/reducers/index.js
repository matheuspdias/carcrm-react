import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import NotifyReducer from './NotifyReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    LoadingReducer,
    NotifyReducer,
    AlertReducer
});
