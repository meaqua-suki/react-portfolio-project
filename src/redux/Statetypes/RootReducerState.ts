import {UserState} from "../Statetypes/UserState";
import { cartState } from "../cart/cart-interfaces";
import { menuContainerState } from "../MenuContainer/menuContainerInterface";
import { ShopState } from "../shop/shopInterface";
export  interface RootReducerState {
  user:UserState;
  cart:cartState;
  MenuContainer:menuContainerState;
  shop:ShopState
}