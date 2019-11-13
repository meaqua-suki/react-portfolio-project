export interface CartItem {
  id:number;
  name:string;
  imageUrl:string;
  price:number;
  quantity:number;
}

export interface CartItemState {
  item: {
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }
}

export type CartItems = CartItem[];