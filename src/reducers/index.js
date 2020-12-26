import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import NotifyReducer from './NotifyReducer';
import AlertReducer from './AlertReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    LoadingReducer,
    NotifyReducer,
    AlertReducer,
    AuthReducer
});
