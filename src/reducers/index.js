import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import NotifyReducer from './NotifyReducer';

export default combineReducers({
    LoadingReducer,
    NotifyReducer
});
