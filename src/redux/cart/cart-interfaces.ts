import { History } from "history";
import { Dispatch } from "redux";

export interface cartState {
  hidden?: boolean;
  cartItem?:{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }
  
  cartItems:{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }[]
}

export interface checkoutItemProp {
  cartItem:{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  };
  cartItems:CartItem[];
  removeItemInCart:(item:CartItem) => (any)
  decreaseItemQuantity:(item:CartItem) => (any)
  increaseItemQuantity:(item:CartItem) => (any)
}

export interface cartAction {
  type:string;
  payload?:any
}

export interface cartProps {
  toggleCartHidden?:() => any;
  hidden?:boolean;
  history?:History;
  dispatch?:any;
  cartItems?:{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }[]
  itemCount?:number;
}

export interface CartItem {
  id:number;
  name:string;
  imageUrl:string;
  price:number;
  quantity:number;
}

export type CartItems = Array<CartItem>;