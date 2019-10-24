import React from 'react';
import './MenuItem.scss';

interface MenuItemProps {
  title:string;
  subtitle?:string;
  imageUrl?:string;
  size?:string  
}

export const MenuItem = ({title,subtitle,imageUrl,size}:MenuItemProps) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
      backgroundImage:`url(${imageUrl})`
    }}      
    />    
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="sub-title">{subtitle}</span>
    </div>
  </div>
)

