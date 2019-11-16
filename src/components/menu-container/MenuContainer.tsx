import React from 'react';
import  MenuItem  from '../menu-item/MenuItem';
import './MenuContainer.scss';
import sections from './Container.data.js';
// export const MenuContainer = () => (
//   <div className="menu-container">
//     <MenuItem title="shitOne"/>
//     <MenuItem title="shitHole"/>
//     <MenuItem title="Motherfuckers"/>
//   </div>
// )



type Containerprops = {

}
type ContainerState = {
  sections:{
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
  }[]
}
export default class MenuContainer extends React.Component<Containerprops,ContainerState> {
  constructor(props:Containerprops) {
    super(props);
    this.state = {
      sections
    };
  }
  render() {
    return (
      <div className="menu-container">
        {
          this.state.sections.map(({id,...rest}) => {
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
}