import {call,all} from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas, onCheckUserSession } from './user/user.sagas';

export default function* rootsaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(onCheckUserSession)    
  ])
}