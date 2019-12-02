import {takeLatest,call,put} from 'redux-saga/effects';

import {shopActionTypes} from './shop.actions.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionsSucess } from './shop.actions-creator';
import { purgeStoredState } from 'redux-persist';

const {FETCH_COLLECTIONS_START} = shopActionTypes

export function* fetchCollectionsAsync() {
  yield console.log("i am fired");
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap,snapShot);
    yield put(fetchCollectionsSucess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }

}

export function* fetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}