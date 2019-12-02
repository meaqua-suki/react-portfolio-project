import { Reducer } from 'redux';
import { shopActionTypes } from './shop.actions.types';


const INITIAL_STATE = {
  collections:null,
  isFetching:false,
  errorMessage:undefined
}

const {FETCH_COLLECTIONS_START,FETCH_COLLECTIONS_SUCCESS,FETCH_COLLECTION_FAILURE} = shopActionTypes

export const ShopReducer:Reducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching:true
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching:false,
        collections:action.payload
      }
    case FETCH_COLLECTION_FAILURE: 
      return {
        ...state,
        isFetching:false,        
        errorMessage:action.payload
      }        
  
    default:
      return {
        ...state
      }
  }  
}