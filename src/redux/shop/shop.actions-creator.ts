import { shopActionTypes } from './shop.actions.types';
import { Action, ActionCreator, Dispatch } from 'redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const {FETCH_COLLECTIONS_START,FETCH_COLLECTIONS_SUCCESS,FETCH_COLLECTION_FAILURE} = shopActionTypes

export const fetchCollectionsStart:ActionCreator<any> = () => ({
  type:FETCH_COLLECTIONS_START,  
})

export const fetchCollectionsSucess:ActionCreator<any> = (collectionsMap) => ({
  type:FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
})

export const fetchCollectionFailure:ActionCreator<any> = (error) => ({
  type:FETCH_COLLECTION_FAILURE,
  payload:error.message
})

export const fetchCollectionsAsync:ActionCreator<any> = () => {
  return (dispatch:Dispatch) => {    
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchCollectionsSucess(collectionMap));     
    }).catch((error) => dispatch(fetchCollectionFailure(error.message)))
  }
}