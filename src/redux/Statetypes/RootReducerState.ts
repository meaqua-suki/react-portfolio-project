import {UserState} from "../Statetypes/UserState";
import { cartState } from "../cart/cart-interfaces";
export  interface RootReducerState {
  user:UserState;
  cart:cartState;
}