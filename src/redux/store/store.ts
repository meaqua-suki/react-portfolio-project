import {createStore,applyMiddleware, Store} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import {persistedReducer} from '../root-reducer';

const middlewares = [logger];

export const store:Store = createStore(persistedReducer,applyMiddleware(...middlewares));
export const Entirestate = store.getState();

export const persistor = persistStore(store);
// console.log(Entirestate)