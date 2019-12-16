import React from 'react';
import './header.styles.scss'; 
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {signOutStart} from '../../redux/user/user.actions-creator';
import {connect} from 'react-redux'
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'
import {CartIcon} from '../cart-icon/cart-icon';
import {Cart} from '../cart-dropdown/cart-dropdown.component';
import {currentUserSelector} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {OptionDiv,HeaderContainer,Optionscontainer,OptionLink,LogoContainer} from './header.styles'

const header:React.FC<any> = ({currentUser,hidden,signOutStart}) => (
  <HeaderContainer className="header">
    <LogoContainer to='/'>
      <Logo className="logo"/>
    </LogoContainer>
    
    <Optionscontainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>      
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      
      {
        currentUser ? 
        (
          <OptionDiv 
            className="option" 
            onClick={signOutStart}
          >
            SIGN OUT
          </OptionDiv>
        )
       :        
       <OptionLink to="/signin">SIGN IN</OptionLink>
      }

      <CartIcon/>
    </Optionscontainer>
    
    {
      (!hidden) ?
        <Cart/> :
        null
    }

  </HeaderContainer>
)
 
const mapStateToProps = (state:RootReducerState) => ({
  currentUser:currentUserSelector(state),
  hidden:selectCartHidden(state)
})

const mapDispatchToProps = (dispatch:any) => ({
  signOutStart:() => dispatch(signOutStart())
})

export const Header = connect(mapStateToProps,mapDispatchToProps)(header)