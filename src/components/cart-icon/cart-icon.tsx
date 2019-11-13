import React, { Component } from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/11.3 shopping-bag.svg.svg";
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-action-creator';
import { Dispatch } from 'redux';
import {cartProps} from '../../redux/cart/cart-interfaces';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'

const mapStateToProps = ({cart:{cartItems}}:RootReducerState) => (
  cartItems
)

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    toggleCartHidden:() => dispatch(toggleCartHidden())
  }
}



const cartIcon:React.FC<cartProps> = ({toggleCartHidden,cartItems}) => (  
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">
      {
      cartItems ? (cartItems.length) : 0
    }
    </span>
  </div>
)

export const CartIcon = connect(mapStateToProps,mapDispatchToProps)(cartIcon);