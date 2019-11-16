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



export const RemoveItemInCart = (cartItems:CartItems,cartItemtoDelete:CartItem) => {
  if (cartItems.length === 0) {
    return [];
  }
  if (cartItems.includes(cartItemtoDelete)) {
    return cartItems.filter((cartItem) => {return cartItem.id !== cartItemtoDelete.id});
  }
}

export const DecreaseItemQuantity = (cartItems:CartItems,cartItemToDecrease:CartItem) => {
  if (cartItemToDecrease.quantity === 1) {
    return RemoveItemInCart(cartItems,cartItemToDecrease);
  }
  else {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToDecrease.id) {
        cartItem.quantity = cartItem.quantity - 1;        
      }
      return cartItem;
    })
  }
}

export const IncreaseItemQuantity = (cartItems:CartItems,cartItemToIncrease:CartItem) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToIncrease.id) {
       cartItem.quantity = cartItem.quantity + 1;
    }
    return cartItem;
  })
}
