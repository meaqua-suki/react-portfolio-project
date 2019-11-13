import {CartItem,CartItems} from '../cart/cart-interfaces'


export const addItemToCart = (cartItems:CartItems,cartItemToAdd:CartItem) => {
  const existingCartItem:CartItem | undefined = cartItems.find(
    (cartItem) => cartItemToAdd.id === cartItem.id
    );
  if (existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === cartItemToAdd.id ?
      {...cartItem,quantity:cartItem.quantity + 1}
      :
      cartItem
    )
  }
  else {
    return [...cartItems,{...cartItemToAdd,quantity: 1}]
  }
}



export const deleteItemInCart = (cartItems:CartItems,cartItemtoDelete:CartItem) => {
  const existingCartItem:CartItem | undefined = cartItems.find(
    (cartItem) => cartItemtoDelete.id === cartItem.id
  )
  if (!existingCartItem) {
    return {...cartItems}
  }
  if (existingCartItem !== undefined && existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => (cartItem.id === existingCartItem.id ?
      {...cartItem,quantity:cartItem.quantity-1} :
      cartItem )
    )
  }
  else if(existingCartItem !== undefined && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) =>(cartItem.id !== existingCartItem.id))
  }
}