import {takeLatest,put,takeEvery,all,call} from 'redux-saga/effects';
import UserActionTypes from './user.action-types';
import {auth,googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import { SignInSuccess, SignInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure } from './user.actions-creator';
import { User } from 'firebase';
import { clearCart } from '../cart/cart-action-creator';


const 
  {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_UP_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
  }
  = UserActionTypes

export function* getSnapshotFromUserAuth(userAuth:User,additionalData:any) {
  try {         
    const userRef = yield call(createUserProfileDocument,userAuth,additionalData);     
    const userSnapshot = yield userRef.get();     
    yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
  } catch (error) {
    yield put(SignInFailure(error))
  }
}

export function* signInwithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user,undefined);
  } catch (error) {
    yield put(SignInFailure(error))
  }
}   

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return
    }
    yield getSnapshotFromUserAuth(userAuth,undefined);
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
    yield getSnapshotFromUserAuth(user,undefined);
  } catch (error) {
    yield put(SignInFailure(error))    
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START,signInwithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION,isUserAuthenticated)
}

export function* isUserSignedOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(clearCart());
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signUpWorker({payload:{displayName,email,password}}:any) {
  try {    
    const {user} =yield auth.createUserWithEmailAndPassword(email,password);
    
    yield put(signUpSuccess({user,additionalData:{displayName}}));
    
  } catch (error) {
    yield put(signUpFailure(error));
  } 
}

export function* signInAfterSignUp({payload:{user,additionalData}}:any) {
  try {
    yield getSnapshotFromUserAuth(user,additionalData)
  } catch (error) {
    yield error
  }
}

export function* onCheckSignOut() {
  yield takeLatest(SIGN_OUT_START,isUserSignedOut)
}


export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onSignupStart() {
  yield takeLatest(SIGN_UP_START,signUpWorker)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onCheckSignOut),
    call(onSignupStart),
    call(onSignUpSuccess)        
  ])
}

