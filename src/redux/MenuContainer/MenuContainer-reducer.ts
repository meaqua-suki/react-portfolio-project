import { Reducer } from "redux";
import { menuContainerState } from "./menuContainerInterface";
import { INITIAL_STATE } from "./initialState";



export const MenuContainerReducer:Reducer = (state:menuContainerState  = INITIAL_STATE,action:any) => {
  return state
}