import { createStore, applyMiddleware, combineReducers } from 'redux';
 import logger from 'redux-logger';

 export const store = () => createStore(
     combineReducers({
       feeling,
       understanding,
       support,
       comments,
     }),
     applyMiddleware(logger)
   ) 