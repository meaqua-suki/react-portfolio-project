import React,{Component,useEffect} from 'react';
import {currentUserSelector} from './redux/user/user.selectors'
import {SelectcollectionsForPreview} from './redux/shop/shop.selector';
import './App.css';


import {HomePage} from './pages/HomePage/Homepage.component';
import {ShopPage} from './pages/Shoppage/shop.component';
import {SignInAndSignupPage} from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {CheckoutPage} from './pages/CheckoutPage/checkoutPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { User } from 'firebase';

import {Header} from './components/header/header.component';

import {connect} from 'react-redux';

import { RootReducerState } from './redux/Statetypes/RootReducerState';
import { checkUserSession } from './redux/user/user.actions-creator';
import { Dispatch } from 'redux';


interface AppMapStateToProps {
  currentUser:User | object |null,  
}

type AppProps = AppMapStateToProps;

const App:React.FC<any> = ({checkUserSession,currentUser}) => {   
  let unsubscribeFromAuth:any = null;

  useEffect(() => {
    checkUserSession();
    
    return () => {
      unsubscribeFromAuth()
    };
  }, [checkUserSession])   

  return (
    <div className="App">        
      <Router>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          
          <Route 
            exact={true}
            path='/signin'
            render={
              () => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignupPage/>)
            }            
          />
          <Route exact={true} path='/checkout' component={CheckoutPage}/>  
        </Switch>
      </Router>
    </div>      
  )
}


const mapStatetoProps = (state:RootReducerState) => ({
  currentUser:currentUserSelector(state),
  collectionsArray:SelectcollectionsForPreview(state)
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);
