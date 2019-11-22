import React, { Component } from 'react';
import './collection-item.styles.scss';
import {CustomButton} from '../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-action-creator';
import { Dispatch } from 'redux';


interface OneItemProp {  
  item:{
    id: number,
    name: string,
    imageUrl: string,
    price: number
  }
  addItem?:any
}

const oneItem:React.FC<OneItemProp> = ({item,addItem}) => {
  const {id,name,imageUrl,price} = item
  return (
    <div className="collection-item">
      <div 
        className="image"
        style={
          {backgroundImage:`url(${imageUrl})`}
      }      
      />      
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>        
        <CustomButton inverted={true} onClick={() => addItem(item)}>ADD TO CART</CustomButton>              
    </div>
  )
}

const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    addItem: (item:any) => dispatch(addItem(item))
  }
)

export const OneItem = connect(null,mapDispatchToProps)(oneItem)