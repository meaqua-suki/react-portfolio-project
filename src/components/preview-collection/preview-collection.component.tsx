import React, { Component } from 'react';
import './preview-collection.scss';
import {OneItem} from '../collection-item/preview-oneItem.component';

import {Link, useLocation} from 'react-router-dom'
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
  let path = useLocation().pathname;
  
  return (
    <div className="collection-preview">
      {/* <div className="title">{title.toUpperCase()}</div> */}
      <Link to={`${path}/${title.toLowerCase()}`} className="title">{title.toUpperCase()}</Link>
      <div className="preview">
        {
          items.filter((item,index) => (index < 4))
          .map((item) => (<OneItem key={item.id} item={item}/>))
        }
      </div>
    </div>
  )
}

