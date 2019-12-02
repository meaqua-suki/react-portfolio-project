import { User } from "firebase";
import UserActionTypes from '../user/user.action-types';

const {  
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,  
  
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


