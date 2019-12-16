import React, { Component, FormEvent, ChangeEvent,useState } from 'react';
import './sign-in.styles.scss';
import {FormInput} from '../../components/form-input/form-input.component';
import {CustomButton} from '../../components/custom-button/custom-button.components'
import {auth} from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { googleSignInStart,emailSignInStart, checkUserSession } from '../../redux/user/user.actions-creator';

export const SignInHookFC:React.FC<any> = ({emailSignInStart,signInwithGoogle}:any) => {
  console.log("SHIT")
  const [userSignInState, setUserSignInState] = useState({
    email:'',
    password:''
  })
  const {email,password} = userSignInState;
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    emailSignInStart(email,password)
  }

  const handleChange =(e:FormEvent<HTMLInputElement>) => {
    const {name,value} = e.currentTarget;
    setUserSignInState({
      ...userSignInState,
      [name]:value
    })
  }
    return (
      <div className="sign-in">
        <h2>Already have account</h2>
        <span className="title">Sign in with email and password</span>
        <form onSubmit={handleSubmit}>        
          <FormInput 
            handleChange={handleChange}
            type="email"
            name="email"
            label="email"
            required={true}
            value={userSignInState.email}
          />        
          <FormInput 
            handleChange={handleChange}
            type="password"
            name="password"
            label="password"
            required={true}
            value={userSignInState.password}
          />
        
        <div className="buttons">
          <CustomButton type='submit' isGoogleSignin={false}>Sign in</CustomButton>
          <CustomButton type='button' onClick={signInwithGoogle} isGoogleSignin={true}>            
            GoogLe Sign In            
          </CustomButton>
        </div>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch:any) => ({
  signInwithGoogle: () => dispatch(googleSignInStart()),
  emailSignInStart:(email:string,password:string) => dispatch(emailSignInStart({email,password})),
  checkUserSession:() => dispatch(checkUserSession())  
})
export const SignIn = connect(null,mapDispatchToProps)(SignInHookFC);