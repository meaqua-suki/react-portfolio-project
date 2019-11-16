import { cartActionTypes } from "./cart-actions.types"
import { CartItem } from "./cart-interfaces"

export const toggleCartHidden = () => (
  {type:cartActionTypes.TOGGLE_CART_HIDDEN}  
)

export const addItem = (item:CartItem) => (
  {
    type:cartActionTypes.ADD_ITEM,
    payload:item
  }
)

export const removeItem = (item:CartItem) => (
  {
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
  }
)

export const decreaseItemQuantity = (item:CartItem) => ({
  type:cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload:item
})

export const increaseItemQuantity = (item:CartItem) => ({
  type:cartActionTypes.INCREASE_ITEM_QUANTITY,
  payload:item
})