import {createStore, compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = state =>state;


export const store = createStore(reducer,{},composeEnhancers());