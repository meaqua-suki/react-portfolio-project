// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import {StyledButtonContainer} from './custom-button.styles'

interface customButtonProps {
  onClick?:any;
  children?:any;
  type?:any;
  className?:string;
  isGoogleSignin?:boolean;
  inverted?:boolean
}

export const CustomButton:React.FC<customButtonProps> = ({children,...props}) => (
  <StyledButtonContainer {...props}>
    {children}           
  </StyledButtonContainer>
)