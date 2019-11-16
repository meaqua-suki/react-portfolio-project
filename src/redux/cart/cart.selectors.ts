import {createSelector, Selector} from 'reselect';
import {RootReducerState} from '../Statetypes/RootReducerState'
import { cartState } from './cart-interfaces';
const selectCart:Selector<RootReducerState,cartState> = (state:RootReducerState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce((accumalatedQuantity:number,cartItem) => {
      return accumalatedQuantity + cartItem.quantity
    },0)
)


export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)


export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (selectCartItems) => {
    let totalPrice = selectCartItems.reduce((totalPrice,cartItem) => {
      return totalPrice + (cartItem.price * cartItem.quantity)
    },0)
    return totalPrice
  }
)