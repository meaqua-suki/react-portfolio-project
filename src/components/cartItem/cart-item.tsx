import React from 'react';
import {CartItemState} from './cart-item-Prop-state';
import './cart-item.styles.scss'
export const Cart_Item:React.FC<any> = ({item:{id,name,imageUrl,price,quantity}}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"/>
    <div className="item-details">
      <h2 className="name">{name}</h2>
      <span className="price">
        {quantity} × ${price}
      </span>
    </div>
  </div>
)