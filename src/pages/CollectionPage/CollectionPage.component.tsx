import React from 'react';
import './collectionPage.scss';

import {Selectcollection} from '../../redux/shop/shop.selector';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState';

import { connect } from 'react-redux';
import collectionPageProp from './collectionPagePropType';
import { OneItem } from '../../components/collection-item/preview-oneItem.component';


const mapStatetoProps = (state:RootReducerState,ownProps:any) => {
  return {
    collection:Selectcollection(ownProps.match.params.collectionId)(state)
  }  
} 

export const collectionPage:React.FC<collectionPageProp> = ({collection}) => {     
  if (!collection) {
    return (
      <div className="not-find-collection">
        <h1>NOT FIND COLLECTION</h1>
      </div>
    )
  }
  else {
    const {title,items} = collection
    return ( 
      <div className="collection-page">
        <h2 className="title">
          {title}
        </h2>
        <div className="items">
          {
            items.map((item) => (
              <OneItem key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    )
  }
  
}

export const CollectionPage = connect(mapStatetoProps)(collectionPage)