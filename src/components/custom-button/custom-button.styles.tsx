import {css}  from 'styled-components';
import styled from 'styled-components';


const invertedButton = styled.button`
  background-color: black;
  color: white;
  border: 1px solid black;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
const getButtonStyles = (props:any) => {
  if (props.isGoogleSignin) {
    return googleSignInStyles
  }
  return props.inverted ? invertedButton : buttonStyles  
}
export const StyledButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;  
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;  
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`