import {createSelector, Selector} from 'reselect';
import { RootReducerState } from '../Statetypes/RootReducerState';
import { ShopState } from './shopInterface';


const COLLECTION_ID_MAP = { 
  hats:1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5,  
}

type UrlParam = "hats" | "sneakers" | "jackets" | "womens" | "mens"

const ShopSelector:Selector<RootReducerState,ShopState> = (state:RootReducerState) => state.shop;

export const Selectcollections = createSelector([ShopSelector],(ShopSelector) => {
  return ShopSelector.collections
});

export const Selectcollection = (collectionUrlParam:string) =>
 createSelector(
  [Selectcollections],
  (collections) => 
  collections.find(
    (collection) => collection.title.toLowerCase() === collectionUrlParam.toLowerCase()
  )
 )
