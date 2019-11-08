import React, { Component, FormEvent } from 'react';
import {FormInput} from '../../components/form-input/form-input.component';
import {CustomButton} from '../../components/custom-button/custom-button.components';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up-styles.scss';

interface signUpState {
  displayName?:any;
  password?:any;
  confirmPassword?:any;
  email?:any;
}

interface signUpprops {

}

export class SignUp extends Component<signUpprops,signUpState> {  
  constructor(props:signUpprops) {
    super(props);

    this.state = {
      displayName:'',
      password:'',
      confirmPassword:'',
      email:''
    }    
  }
  
  handleSubmit = async (event:FormEvent) => {
    const {displayName,password,confirmPassword,email} = this.state
    event.preventDefault();    
    if (password !== confirmPassword) {
      alert("password don't match!!!")
      return;
    }
    try {
      const {user} =await auth.createUserWithEmailAndPassword(email,password);
      await createUserProfileDocument(user,{displayName});
      this.setState({
        displayName:'',
        password:'',
        confirmPassword:'',
        email:''
      })

    } catch (error) {
      console.error(error)
    }
  }
 
  handleChange =(e:FormEvent<HTMLInputElement>) => {
    const {name,value} = e.currentTarget;
    this.setState({
      [name]:value
    })
  }

  render() {
    const {displayName,password,confirmPassword,email} = this.state

    return (
      <div className="sign-up"> 
        <h2 className="title">don't have account</h2>
        <span>sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required={true}
            label="Display name"
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required={true}
            label="Email"
          />          
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required={true}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmpassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required={true}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>                              
        </form>
      </div>
      )    
  }  
}