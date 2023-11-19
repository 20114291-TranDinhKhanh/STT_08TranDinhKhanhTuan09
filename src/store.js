// src/store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './taskReducer';

const store = createStore(rootReducer, applyMiddleware(/* middleware */));

export default store;
