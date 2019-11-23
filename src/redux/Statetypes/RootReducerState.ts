import {UserState} from "../Statetypes/UserState";
import { cartState } from "../cart/cart-interfaces";
import { menuContainerState } from "../MenuContainer/menuContainerInterface";

export  interface RootReducerState {
  user:UserState;
  cart:cartState;
  MenuContainer:menuContainerState;
  shop:any;
}