export interface cartState {
  hidden?: boolean;
  cartItems:{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }[]
}

export interface cartAction {
  type:string;
  payload?:any
}

export interface cartProps {
  toggleCartHidden?:() => any;
  hidden?:boolean;
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