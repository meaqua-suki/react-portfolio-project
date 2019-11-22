import React from 'react';
import  MenuItem  from '../menu-item/MenuItem';
import './MenuContainer.scss';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../../redux/Statetypes/RootReducerState';
import {sectionsSelector} from '../../redux/MenuContainer/MenuContainer.selectors'
import { menuItems, menuContainerProps } from '../../redux/MenuContainer/menuContainerInterface';


const menuContainer:React.FC<menuContainerProps> = ({sections}) => {   
    return (
      <div className="menu-container">
        {
         sections.map(({id,...rest}) => {
            return (
              <MenuItem 
                key={id}
                {...rest}
              />
            )
          })
        }
      </div>
    )  
}

const mapStateToProps:MapStateToProps<{sections:menuItems},any,RootReducerState> = (state:RootReducerState) => (
  {
    sections:sectionsSelector(state)
  }
)

const MenuContainer = connect(mapStateToProps)(menuContainer);

export default MenuContainer;