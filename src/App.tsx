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

import {auth} from './firebase/firebase.utils';

interface AppProps {

}

interface Appstate {
  currentUser?:null | object
}


class App extends Component<AppProps,Appstate> { 
  constructor(props:object) {
    super(props);
    
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth:any = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser:user})
      }
      else {
        this.setState({currentUser:null})
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
          <Header currentUser={this.state.currentUser}/>
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

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
