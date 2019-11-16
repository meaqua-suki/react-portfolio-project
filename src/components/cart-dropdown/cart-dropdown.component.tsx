import React, { Component } from 'react';
import {CustomButton} from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import { cartProps } from '../../redux/cart/cart-interfaces';
import { connect } from 'react-redux';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'
import { Cart_Item } from '../cartItem/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart-action-creator'
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const cart:React.FC<cartProps> = ({cartItems,history,dispatch}) => {
  // console.log(dispatch)      
  return (
    <div className="cart-dropdown">
      <div className="cart-items">       
        {       
          (cartItems) ? (cartItems.length ? (cartItems.map(
            (cartItem) => (
              <Cart_Item key={cartItem.id} item={cartItem}/>
          )
          )) : <span className="empty-message">Your cart is empty</span>) : (null) 
        }
      </div>
      <CustomButton
        onClick={
          () => {            
           if (history) {
             history.push('/checkout');             
           }
           if (dispatch) {
             dispatch(toggleCartHidden())
           }            
          }   
        }        
      >
        去检查购物车
      </CustomButton>

    </div>
  )     
}

const mapStateToProps = (state:RootReducerState) => (
  {
    cartItems:selectCartItems(state)
  }
)


export const Cart = withRouter(connect(mapStateToProps)(cart));

