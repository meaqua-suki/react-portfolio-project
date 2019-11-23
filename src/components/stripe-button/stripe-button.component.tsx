import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {stripeProps} from './stripeProps'



const StripeCheckoutButton:React.FC<stripeProps> = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_22Z7cjXS1uSkcW9ZHAFVRREX00AGNw2JP7'
  const onToken = (token:any) => {
    console.log(token);
    alert("payment success")
  }
  return (
    <StripeCheckout
      label="Pay Now" 
      name="clothing"
      token={onToken}
      billingAddress={true}
      amount={priceForStripe}
      panelLabel='Pay Now'
      description={`Your payment is $${price}`}
      shippingAddress={true}
      image=''
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;