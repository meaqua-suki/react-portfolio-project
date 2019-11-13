// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './custom-button.styles.scss';

interface customButtonProps {
  onClick?:any;
  children?:any;
  type?:any;
  className?:string;
  isGoogleSignin?:boolean;
  inverted?:boolean
}

export const CustomButton:React.FC<customButtonProps> = (
  {
    children,
    isGoogleSignin,
    inverted,
    ...otherprops}) => (
  <button 
    className={
      `${isGoogleSignin ? 'google-sign-in' : ''}
       ${inverted ? 'inverted' : ''}
       custom-button`
    } 
    {...otherprops}
  >
    {children}           
  </button>
)