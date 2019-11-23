import {createSelector, Selector} from 'reselect';
import { RootReducerState } from '../Statetypes/RootReducerState';

const ShopSelector:Selector<RootReducerState,any> = (state:RootReducerState) => state.shop;

export const Selectcollections = createSelector([ShopSelector],(ShopSelector) => {
  return ShopSelector.collections
});



export const SelectcollectionsForPreview = createSelector(
  [Selectcollections],
  (collectionsMap) => {
    return Object.keys(collectionsMap).map((key) => collectionsMap[key])
  }
)


export const Selectcollection = (collectionUrlParam:any) =>
 createSelector(
  [Selectcollections],
  (collections) => 
    collections[collectionUrlParam]
 )
