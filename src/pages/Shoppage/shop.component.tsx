import React, { Component } from 'react';
import SHOP_DATA from './2.2 shop.data.js';
import {PreviewCollection} from '../../components/preview-collection/preview-collection.component'
interface ShopProp {

}

interface ShopState {
  collections: {
    id: number,
    title:string,
    routeName:string;
    items: {
      id: number,
      name:string,
      imageUrl:string,
      price:number
    }[]
  }[]
}

export class ShopPage extends Component<ShopProp,ShopState> {
  constructor(props:ShopProp) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    }    
  }  
  
  render() {
    const {collections} = this.state;
    return (<div className="shop-page">
      {
        collections.map(({id,...rest}) => 
        <PreviewCollection 
          key={id}
          {...rest}
        /> )
      }
    </div>)
  }
}