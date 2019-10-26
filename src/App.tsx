import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Homepage from './homepage.component'
import {HomePage} from './pages/HomePage/Homepage.component';
import {HatsPage} from './pages/HatsPage/HatsPage.component';
import {ShopPage} from './pages/Shoppage/shop.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/header/header.component';

class App extends Component {
  constructor(props:object) {
    super(props);
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
