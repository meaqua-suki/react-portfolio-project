import React from 'react';
import './collectionsOverview.styles.scss';
import {PreviewCollection} from '../../components/preview-collection/preview-collection.component'
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../../redux/Statetypes/RootReducerState';
import {Selectcollections} from '../../redux/shop/shop.selector';
import {ShopProps,ShopState} from '../../redux/shop/shopInterface';

const mapStateToProps:MapStateToProps<ShopState,any,RootReducerState> = (state:RootReducerState) => (
  {
    collections:Selectcollections(state)
  }
)


const collectionsOverView:React.FC<ShopProps> = ({collections}) => (
  <div className="collections-over-view">
    {
      collections.map(({id,...rest}) => 
      (
        <PreviewCollection 
          key={id}
          {...rest}
        />
      ) )
    }
  </div>
)
   
export const CollectionsOverView = connect(mapStateToProps)(collectionsOverView)
  
