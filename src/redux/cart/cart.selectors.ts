import {createSelector} from 'reselect';
import {RootReducerState} from '../Statetypes/RootReducerState'
const selectCart = (state:RootReducerState) => state.cart;

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
