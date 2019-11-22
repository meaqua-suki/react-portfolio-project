import {SHOP_DATA} from './2.2 shop.data.js';
import { Reducer } from 'redux';
import { ShopState } from './shopInterface.js';

const INITIAL_STATE = {
  collections:SHOP_DATA
}

export const ShopReducer:Reducer = (state:ShopState = INITIAL_STATE,action) => {
  return {
    ...state
  }
}