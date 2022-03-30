// modules
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// reducers
import {mainReducer, sharedReducer} from './reducers';

// root reducer
const rootReducer = combineReducers ({
  main: mainReducer,
  shared: sharedReducer,
});

// store
const store = createStore (rootReducer, applyMiddleware (compose (thunk)));

// exports
export default store;
