import React, { Component } from 'react';
import {CustomButton} from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import { cartProps } from '../../redux/cart/cart-interfaces';
import { connect } from 'react-redux';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'
import { Cart_Item } from '../cartItem/cart-item';

const cart:React.FC<cartProps> = ({cartItems}) => (    
  <div className="cart-dropdown">
    <div className="cart-items">       
      {       
        cartItems ? (cartItems.map(
          (cartItem) => (
            <Cart_Item key={cartItem.id} item={cartItem}/>
        )
        )) : null
      }
    </div>
  <CustomButton>去检查购物车</CustomButton>
  </div>     
)

const mapStateToProps = ({cart:{cartItems}}:RootReducerState) => (
  {
    cartItems
  }
)


export const Cart = connect(mapStateToProps)(cart);

