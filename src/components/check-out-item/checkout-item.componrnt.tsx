import React from 'react';
import { checkoutItemProp, CartItem } from '../../redux/cart/cart-interfaces';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import { removeItem, decreaseItemQuantity, increaseItemQuantity } from '../../redux/cart/cart-action-creator';
import './checkout-item.styles.scss';


const checkoutItem:React.FC<checkoutItemProp> = (

  {cartItem,cartItem:{imageUrl,name,quantity,price},removeItemInCart,decreaseItemQuantity,increaseItemQuantity}
) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>    
    <span className="name">
      {name}
    </span>
    <span className="quantity">
      <span className="arrow" onClick={() => (decreaseItemQuantity(cartItem))}>&#10094;</span>
      {quantity}
      <span className="arrow" onClick={() => (increaseItemQuantity(cartItem))}>&#10095;</span>
    </span>
    <span className="price">
      {price}
    </span>
    <span className="remove-button" onClick={()=>removeItemInCart(cartItem)}>
      &#10005;
    </span>
  </div>
)

const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    removeItemInCart:(item:CartItem) => (dispatch(removeItem(item))),
    decreaseItemQuantity:(item:CartItem) => (dispatch(decreaseItemQuantity(item))),
    increaseItemQuantity:(item:CartItem) => (dispatch(increaseItemQuantity(item)))
  }
);

export const CheckoutItem = connect(null,mapDispatchToProps)(checkoutItem);

