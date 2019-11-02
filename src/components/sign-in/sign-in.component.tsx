import React, { Component, FormEvent, ChangeEvent } from 'react';
import './sign-in.styles.scss';
import {FormInput} from '../../components/form-input/form-input.component';
import {CustomButton} from '../../components/custom-button/custom-button.components'
import {signInwithGoogle} from '../../firebase/firebase.utils.js';

interface SignInProps {

}
interface SignInState {
  email?:any;
  password?:any;
}

export class SignIn extends Component<SignInProps,SignInState> {
  constructor(props:SignInProps) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    this.setState({
      email:'',
      password:''
    })
  }

  handleChange =(e:FormEvent<HTMLInputElement>) => {
    const {name,value} = e.currentTarget;
    this.setState(() => (
      {
        [name]:value
      }
    ))
  }

  render() {
    return (
      <div className="sign-in">
        <h2>Already have account</h2>
        <span className="title">Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>        
          <FormInput 
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            required={true}
            value={this.state.email}
          />        
          <FormInput 
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="password"
            required={true}
            value={this.state.password}
          />
        
        <div className="buttons">
          <CustomButton type='submit' isGoogleSignin={false}>Sign in</CustomButton>
          <CustomButton onClick={signInwithGoogle} isGoogleSignin={true}>
            
            Sign in with Google
            
          </CustomButton>
        </div>
      </form>
    </div>
    )
  }
}