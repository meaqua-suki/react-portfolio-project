import React from 'react';
import { MenuItem } from '../menu-item/MenuItem';
import './MenuContainer.scss';
import sections from './Container.data.js';
// export const MenuContainer = () => (
//   <div className="menu-container">
//     <MenuItem title="shitOne"/>
//     <MenuItem title="shitHole"/>
//     <MenuItem title="Motherfuckers"/>
//   </div>
// )



interface Containerprops {

}
interface ContainerState {
  sections:{
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
  }[]
}
export default class MenuContainer extends React.Component<Containerprops,ContainerState> {
  constructor(props:object) {
    super(props);
    this.state = {
      sections
    };
  }
  render() {
    return (
      <div className="menu-container">
        {
          this.state.sections.map(({title,id,imageUrl,size}) => {
            return <MenuItem title={title} key={id} subtitle="shitHole" imageUrl={imageUrl} size={size}/>
          })
        }
      </div>
    )
  }
}