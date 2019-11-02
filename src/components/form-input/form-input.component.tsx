import React, { Component } from 'react';
import './form-input.styles.scss';
interface formInputProps {
  handleChange: any;
  label?: string;  
  required?: boolean;
  type: string;
  name: string;
  value: string;  
}

export const FormInput:React.FC<formInputProps> =
 ({handleChange,label,...otherProps}) => (
  <div className="group">
    <input 
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {
      label?
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>      
        :null
    }

  </div>
)