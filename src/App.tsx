import React,{Component} from 'react';
import {currentUserSelector} from './redux/user/user.selectors'
import './App.css';
import {HomePage} from './pages/HomePage/Homepage.component';
import {HatsPage} from './pages/HatsPage/HatsPage.component';
import {ShopPage} from './pages/Shoppage/shop.component';
import {SignInAndSignupPage} from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {CheckoutPage} from './pages/CheckoutPage/checkoutPage'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { User } from 'firebase';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


import {Header} from './components/header/header.component';


import {connect} from 'react-redux';
import { Dispatch } from 'redux';


import {setCurrentUser} from './redux/user/user.actions-creator';
import { RootReducerState } from './redux/Statetypes/RootReducerState';


interface AppMapStateToProps {
  currentUser:User | object |null
}

interface AppMapDispatchToProps {
  setCurrentUser:(user:any) => {
    type:string,
    payload:User
  }
}

type AppProps = AppMapStateToProps & AppMapDispatchToProps;



class App extends Component<AppProps,any> {   
  unsubscribeFromAuth:any = null;
  componentDidMount() {
    const {setCurrentUser} = this.props      
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {    
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {         
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });        
      }
      else {        
        setCurrentUser(userAuth)
      }              
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
                () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignupPage/>)
              }            
            />
            <Route exact={true} path='/checkout' component={CheckoutPage}/>  
          </Switch>
        </Router>
      </div>      
    )
  }
}

const mapStatetoProps = (state:RootReducerState) => ({
  currentUser:currentUserSelector(state)
})

const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    setCurrentUser:(user:User) => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStatetoProps,mapDispatchToProps)(App);
