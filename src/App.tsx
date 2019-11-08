import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Homepage from './homepage.component'
import {HomePage} from './pages/HomePage/Homepage.component';
import {HatsPage} from './pages/HatsPage/HatsPage.component';
import {ShopPage} from './pages/Shoppage/shop.component';
import {SignInAndSignupPage} from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/header/header.component';
import {connect, DispatchProp} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { Dispatch } from 'redux';
import {setCurrentUser} from './redux/user/user.actions-creator';
import {UserState} from './redux/Statetypes/UserState'
import { User } from 'firebase';

interface AppMapStateToProps {

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
            <Route path='/shop' exact={true} component={ShopPage}/>
            <Route path="/shop/hats" component={HatsPage} />
            <Route path='/signin' component={SignInAndSignupPage}/>  
          </Switch>
        </Router>
      </div>      
    )
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    setCurrentUser:(user:User) => dispatch(setCurrentUser(user))
  }
)

export default connect(null,mapDispatchToProps)(App);
