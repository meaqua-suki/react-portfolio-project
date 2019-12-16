import React, { Component, FormEvent,useState } from 'react';
import {FormInput} from '../../components/form-input/form-input.component';
import {CustomButton} from '../../components/custom-button/custom-button.components';


import './sign-up-styles.scss';
import { signUpStart } from '../../redux/user/user.actions-creator';
import { connect } from 'react-redux';



const SignUpHookFC:React.FC<any> = ({signUpStart}:any) => {   
  const [userCredential, setUserCredential] = useState({
    displayName:'',
    password:'',
    confirmPassword:'',
    email:''
  })
  const {displayName,password,confirmPassword,email} = userCredential;
  
  const handleSubmit = async (event:FormEvent) => {    
    event.preventDefault();    
    if (password !== confirmPassword) {
      alert("password don't match!!!")
      return;
    }
    signUpStart({displayName,password,email})
  }
 
  const handleChange =(e:FormEvent<HTMLInputElement>) => {
    const {name,value} = e.currentTarget;
    setUserCredential({
      ...userCredential,
      [name]:value
    })
  }
  return (
    <div className="sign-up"> 
      <h2 className="title">don't have account</h2>
      <span>sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required={true}
          label="Display name"
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          required={true}
          label="Email"
        />          
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required={true}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required={true}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>                              
      </form>
    </div>
    )    
    
}

const mapDispatchToProps = (dispatch:any) => ({
  signUpStart: (user:any) => dispatch(signUpStart(user))
})


export const SignUp = connect(null,mapDispatchToProps)(SignUpHookFC);
