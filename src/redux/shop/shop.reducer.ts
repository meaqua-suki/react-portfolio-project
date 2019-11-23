import {SHOP_DATA} from './2.2 shop.data.js';
import { Reducer } from 'redux';

const INITIAL_STATE = {
  collections:SHOP_DATA
}

export const ShopReducer:Reducer = (state = INITIAL_STATE,action) => {
  return {
    ...state
  }
}