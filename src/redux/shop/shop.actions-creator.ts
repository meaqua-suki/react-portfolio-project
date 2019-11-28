import { shopActionTypes } from './shop.actions.types';
import { Action, ActionCreator } from 'redux';

const {UPDATE_COLLECTIONS} = shopActionTypes

export const updateCollections:ActionCreator<any> = (collectionMap:any) => ({
  type:UPDATE_COLLECTIONS,
  payload:collectionMap
})