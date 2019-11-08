// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './custom-button.styles.scss';

interface customButtonProps {
  onClick?:any;
  children?:any;
  type?:any;
  className?:string;
  isGoogleSignin?:boolean;
}

export const CustomButton:React.FC<customButtonProps> = ({children,isGoogleSignin,...otherprops}) => (
  <button 
    className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} 
    {...otherprops}
  >
    {children}           
  </button>
)