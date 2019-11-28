import { Reducer } from 'redux';
import { shopActionTypes } from './shop.actions.types';

const INITIAL_STATE = {
  collections:null
}

const {UPDATE_COLLECTIONS} = shopActionTypes

export const ShopReducer:Reducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections:action.payload
      }      
  
    default:
      return {
        ...state
      }
  }  
}