import { User } from "firebase";
import UserActionTypes from '../user/user.action-types';

const {  
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,  
  CHECK_USER_SESSION,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START
} 
= UserActionTypes

export const setCurrentUser = (user:User) => (
  {
    type:SET_CURRENT_USER,
    payload:user
  }
)

export const googleSignInStart = () => ({
  type:GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword:any) => ({
  type:EMAIL_SIGN_IN_START,
  payload:emailAndPassword  
})

export const SignInSuccess = (user:User) => ({
  type:SIGN_IN_SUCCESS,
  payload:user
})

export const SignInFailure = (error:Error) => ({
  type:SIGN_IN_FAILURE,
  payload:error
})

export const checkUserSession = () => ({
  type:CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type:SIGN_OUT_START
})

export const signOutFailure = (error:any) => ({
  type:SIGN_OUT_FAILURE,
  payload:error
})

export const signOutSuccess = () => ({
  type:SIGN_OUT_SUCCESS
})

export const signUpSuccess = ({user,additionalData}:any) => ({
  type:SIGN_UP_SUCCESS,
  payload:{user,additionalData}
})

export const signUpFailure = (error:any) => ({
  type:SIGN_UP_FAILURE,
  payload:error
})

export const signUpStart = (user:any) => ({
  type:SIGN_UP_START,
  payload:user
})


