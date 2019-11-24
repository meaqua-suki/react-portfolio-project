import React from 'react';
import  MenuContainer  from '../../components/menu-container/MenuContainer';
import {HomepageContainer} from './Homepage.styles';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
export const HomePage: React.FC = () => (
  <HomepageContainer>
    <MenuContainer/>
  </HomepageContainer>
  
)