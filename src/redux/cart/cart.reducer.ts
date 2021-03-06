import { Reducer } from "redux"
import {cartActionTypes} from "./cart-actions.types"
import {cartState,cartAction,CartItem,CartItems} from './cart-interfaces';
import {addItemToCart,RemoveItemInCart,DecreaseItemQuantity,IncreaseItemQuantity} from './cart.utils';
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
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...prevState,
        cartItems:RemoveItemInCart(prevState.cartItems,action.payload)
      }
    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...prevState,
        cartItems:DecreaseItemQuantity(prevState.cartItems,action.payload)
      }
    case cartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...prevState,
        cartItems:IncreaseItemQuantity(prevState.cartItems,action.payload)
      }
    case cartActionTypes.CLEAR_CART_SUCCESS:
      return {
        ...prevState,
        cartItems:[]
      }
    default:
      return prevState
  }
}