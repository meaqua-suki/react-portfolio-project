import { Reducer } from "redux"
import {cartActionTypes} from "./cart-actions.types"
import {cartState,cartAction,CartItem,CartItems} from './cart-interfaces';
import {addItemToCart,deleteItemInCart} from './cart.utils';
const INITIAL_STATE = {
  hidden:true,
  cartItems:[]
}

export const cartReducer:Reducer = (prevState:cartState = INITIAL_STATE,action:cartAction) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...prevState,
        hidden:!prevState.hidden
      }     
    case cartActionTypes.ADD_ITEM:
      return {
        ...prevState,
        cartItems:addItemToCart(prevState.cartItems,action.payload)
      }
    case cartActionTypes.DELETE_ITEM:
      return {
        ...prevState,
        cartItems:deleteItemInCart(prevState.cartItems,action.payload)
      }
    default:
      return prevState
  }
}