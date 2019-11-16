import React from 'react';
import './MenuItem.scss';
import {useHistory} from 'react-router-dom';
import { History } from 'history';
import {withRouter} from 'react-router-dom'

interface MenuItemProps  {
  title?:string;
  subtitle?:string;
  imageUrl?:string;
  size?:string;
  linkUrl?:string;
  history:History
}


const MenuItem: React.FC<MenuItemProps> = ({title,subtitle,imageUrl,size,linkUrl,history}) => {
  // let history = useHistory();
  return (
    <div className={`menu-item ${size}`}>
        <div
          className="background-image"
          style={{
          backgroundImage:`url(${imageUrl})`
          }}      
        />    
      <div 
        className="content" 
        onClick={() => {
          history.push(`${linkUrl}`)
        }}
      >
        <h1 className="title">{title}</h1>
        <span className="sub-title">{subtitle}</span>
      </div>
    </div>
  )
  }
;


export default withRouter(MenuItem);
