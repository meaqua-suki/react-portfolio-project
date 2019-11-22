

export interface menuContainerState {      
  sections:{
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string
  }[]
}

export interface menuItem {  
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string  
}

export type menuItems = menuItem[];

export type menuContainerProps = menuContainerState;