import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combineReducers from './reducers';

let middleware = [ReduxThunk];

export const store = createStore(combineReducers, applyMiddleware(...middleware));