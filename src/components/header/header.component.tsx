import React, { Component } from 'react';
import './header.styles.scss'; 
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';


interface HeaderProps {
  currentUser?:object | null
}


export const Header:React.FC<HeaderProps> = ({currentUser}) => (
  <div className="header">
    <Link to='/' className="logo-container">
      <Logo className="logo"/>
    </Link>
    
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>      
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      
      {
        currentUser ? 
        (
          <div
            className="option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        )
       :        
       <Link className="option" to="/signin">SIGN IN</Link>
      }
      
    </div>
  </div>
)