import React from 'react';
import './header.styles.scss'; 
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import {RootReducerState} from '../../redux/Statetypes/RootReducerState'
import {CartIcon} from '../cart-icon/cart-icon';
import {Cart} from '../cart-dropdown/cart-dropdown.component';
import {currentUserSelector} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {OptionDiv,HeaderContainer,Optionscontainer,OptionLink,LogoContainer} from './header.styles'
interface HeaderProps {
  currentUser?:object | null;
  hidden?:boolean;  
}

const header:React.FC<HeaderProps> = ({currentUser,hidden}) => (
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
            onClick={() => auth.signOut()}
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

export const Header = connect(mapStateToProps)(header)