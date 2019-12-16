import { Reducer } from "redux";
import UserActionTypes from './user.action-types';


const 
{  
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE
}
   = UserActionTypes;

interface UserState {
  currentUser:any;
}

interface UserAction {
  type:string;
  payload:any;
}

const INITIAL_STATE = {
  currentUser:null,
  error:null
}

const userReducer:Reducer<UserState|undefined,UserAction> = (state = INITIAL_STATE,action) => 
  {
    switch (action.type) {      
      case SIGN_IN_SUCCESS: 
        return {
          ...state,
          currentUser:action.payload,
          error:null
        }
      case SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser:null,
          error:null
        }
      case SIGN_IN_FAILURE:
      case SIGN_OUT_FAILURE:
      case SIGN_UP_FAILURE:
        return {
          error:action.payload,
          ...state          
        }    
      default:
        return state;
    }
  }

  export default userReducer; 