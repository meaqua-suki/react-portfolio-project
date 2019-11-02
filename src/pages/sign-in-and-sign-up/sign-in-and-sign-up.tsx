import React, { Component } from 'react'
import './sign-in-and-sign-up.style.scss';
import {SignIn} from '../../components/sign-in/sign-in.component'
interface SigninAndSignoutProps {

}

export const SignInAndSignupPage:React.FC<SigninAndSignoutProps> = () => (
  <div className="sign-in-and-sign-out">
    <SignIn/>
  </div>
)