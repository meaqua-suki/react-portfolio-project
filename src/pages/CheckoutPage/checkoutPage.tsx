import React from 'react'
import './checkout.styles.scss';
import {selectCartTotalPrice,selectCartItems} from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { RootReducerState } from '../../redux/Statetypes/RootReducerState';
import { CartItems } from '../../redux/cart/cart-interfaces';
import {CheckoutItem} from '../../components/check-out-item/checkout-item.componrnt';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


interface CheckoutPageState {
  totalPrice:number;
  cartItems:CartItems;
}


const checkoutPage:React.FC<CheckoutPageState> =({totalPrice,cartItems}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="checkout-items">
      {
        cartItems.map((cartItem) => (          
          <CheckoutItem 
            key={cartItem.id} 
            cartItem={cartItem}
            cartItems={cartItems}
          />
        ))
      }
    </div>
    <div className="total">
      <span>TOTAL: $ {totalPrice}</span>
    </div>
    <div className="test-warning">
      *Please use test credit card!!!!
      <br/>

      4242 4242 4242 4242 -Exp:01/20 -CVV:123 (visa test)
    </div>
    <StripeCheckoutButton price={totalPrice}/>

  </div>
)


const mapStateToProps = (state:RootReducerState) => ({
  cartItems:selectCartItems(state),
  totalPrice:selectCartTotalPrice(state)
})


export const CheckoutPage = connect(mapStateToProps)(checkoutPage);