import {createStore,applyMiddleware, Store} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from '../root-reducer';


const middlewares = [logger];

export const store:Store = createStore(rootReducer,applyMiddleware(...middlewares));
export const Entirestate = store.getState();

console.log(Entirestate)