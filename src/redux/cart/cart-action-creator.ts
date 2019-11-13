import { cartActionTypes } from "./cart-actions.types"

export const toggleCartHidden = () => (
  {type:cartActionTypes.TOGGLE_CART_HIDDEN}  
)

export const addItem = (item:object) => (
  {
    type:cartActionTypes.ADD_ITEM,
    payload:item
  }
)

export const deleteItem =(item:object) => (
  {
    type:cartActionTypes.DELETE_ITEM,
    payload:item
  }
)