import React, { Component, ReducerState } from 'react';
import './header.styles.scss'; 
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import { Store, Reducer } from 'redux';
import {UserState} from '../../redux/Statetypes/UserState';
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'
import {CartIcon} from '../cart-icon/cart-icon';
import {Cart} from '../cart-dropdown/cart-dropdown.component';

interface HeaderProps {
  currentUser?:object | null;
  hidden?:boolean;  
}

const header:React.FC<HeaderProps> = ({currentUser,hidden}) => (
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

      <CartIcon/>      
    </div>
    
    {
      (!hidden) ?
        <Cart/> :
        null
    }

  </div>
)
 
const mapStateToProps = ({user:{currentUser},cart:{hidden}}:RootReducerState) => ({
  currentUser,
  hidden
})

export const Header = connect(mapStateToProps)(header)