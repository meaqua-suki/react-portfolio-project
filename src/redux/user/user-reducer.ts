import { Reducer } from "react";
import {UserActionTypes} from './user.action-types';

const {SET_CURRENT_USER} = UserActionTypes;

interface UserState {
  currentUser:any;
}

interface UserAction {
  type:string;
  payload:any;
}

const INITIAL_STATE = {
  currentUser:null
}

const userReducer:Reducer<UserState|undefined,UserAction> = (state = INITIAL_STATE,action) => 
  {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          currentUser:action.payload
        }    
      default:
        return state;
    }
  }

  export default userReducer;