import { takeLatest, all,call,put } from "redux-saga/effects";
import {cartActionTypes} from './cart-actions.types';
import {clearCart} from './cart-action-creator'

const 
  {
    CLEAR_CART_SUCCESS
  } = cartActionTypes

export function* clearCartWrker() {
  yield put(clearCart())
}

export function* clearCartSuccess() {
  yield takeLatest(CLEAR_CART_SUCCESS,clearCartWrker)
}



export function* cartSagas() {
  yield (all([
    call(clearCartSuccess)    
  ]))
}