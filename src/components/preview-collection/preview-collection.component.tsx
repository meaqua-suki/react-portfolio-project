import React, { Component } from 'react';
import './preview-collection.scss';
import {OneItem} from '../collection-item/preview-oneItem.component';
interface CollectionProps {
  id?:number;
  title:string;
  routeName?:string;
  items:{
    id: number,
    name: string,
    imageUrl: string,
    price: number
  }[];
}

export const PreviewCollection: React.FC<CollectionProps> = ({title,items}) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {
          items.filter((item,index) => (index < 4))
          .map(({id,...otherItemProps}) => (<OneItem key={id} {...otherItemProps}/>))
        }
      </div>
    </div>
  )
}