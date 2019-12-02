import {takeLatest,put,takeEvery,all,call} from 'redux-saga/effects';
import UserActionTypes from './user.action-types';
import {auth,googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';
import { SignInSuccess, SignInFailure } from './user.actions-creator';
import { User } from 'firebase';

const 
  {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS
  }
  = UserActionTypes

export function* getSnapshotFromUserAuth(userAuth:User) {
  try {         
    const userRef = yield call(createUserProfileDocument,userAuth);     
    const userSnapshot = yield userRef.get();     
    yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
  } catch (error) {
    yield put(SignInFailure(error))
  }
}

export function* signInwithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error))
  }
}   


export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START,signInwithGoogle)
}

export function* signInwithEmail({payload:{email,password}}:any) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error))    
  }
}

export function *onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START,signInwithEmail)
}


export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)    
  ])
}