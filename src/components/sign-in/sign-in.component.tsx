import React, { Component, FormEvent, ChangeEvent } from 'react';
import './sign-in.styles.scss';
import {FormInput} from '../../components/form-input/form-input.component';
import {CustomButton} from '../../components/custom-button/custom-button.components'
import {auth} from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions-creator';

interface SignInProps {

}
interface SignInState {
  email?:any;
  password?:any;
}

export class signIn extends Component<any,SignInState> {
  constructor(props:SignInProps) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {emailSignInStart} = this.props;
    const {email,password} = this.state;
    emailSignInStart(email,password)
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
    const {signInwithGoogle} = this.props

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
          <CustomButton type='button' onClick={signInwithGoogle} isGoogleSignin={true}>            
            GoogLe Sign In            
          </CustomButton>
        </div>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  signInwithGoogle: () => dispatch(googleSignInStart()),
  emailSignInStart:(email:string,password:string) => dispatch(emailSignInStart({email,password}))  
})
export const SignIn = connect(null,mapDispatchToProps)(signIn);