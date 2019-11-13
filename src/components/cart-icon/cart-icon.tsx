import React, { Component } from 'react';
import {selectCartCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/11.3 shopping-bag.svg.svg";
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-action-creator';
import { Dispatch } from 'redux';
import {cartProps} from '../../redux/cart/cart-interfaces';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'

const mapStateToProps = (state:RootReducerState) => {
  let itemCount = selectCartCount(state)
  return {
    itemCount
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    toggleCartHidden:() => dispatch(toggleCartHidden())
  }
}



const cartIcon:React.FC<cartProps> = ({toggleCartHidden,itemCount}) => (  
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">
      {itemCount}
    </span>
  </div>
)

export const CartIcon = connect(mapStateToProps,mapDispatchToProps)(cartIcon);