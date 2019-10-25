import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Homepage from './homepage.component'
import {HomePage} from './pages/HomePage/Homepage.component';
import {HatsPage} from './pages/HatsPage/HatsPage.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor(props:object) {
    super(props);
  }
  render() {
    return (<Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <HomePage/>
          </Route>
          <Route path="/shop/hats">
            <HatsPage/>
          </Route>
        </Switch>
        
      </div>
      </Router>
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
