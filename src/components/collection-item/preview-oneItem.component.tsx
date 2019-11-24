import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-action-creator';
import { Dispatch } from 'redux';
import {CollectionItemContainer,Image,AddToCartButton,CollectionFooter,Name,Price} from './collection-item.styles'
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
    <CollectionItemContainer>
      <Image        
        style={
          {backgroundImage:`url(${imageUrl})`}
      }      
      />      
        <CollectionFooter>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </CollectionFooter>        
        <AddToCartButton  inverted={true} onClick={() => addItem(item)}>ADD TO CART</AddToCartButton>              
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    addItem: (item:any) => dispatch(addItem(item))
  }
)

export const OneItem = connect(null,mapDispatchToProps)(oneItem)