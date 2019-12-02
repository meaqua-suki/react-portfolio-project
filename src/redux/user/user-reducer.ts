import { Reducer } from "redux";
import UserActionTypes from './user.action-types';

const 
{
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
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
      case SIGN_IN_FAILURE:
        return {
          error:action.payload,
          ...state          
        }    
      default:
        return state;
    }
  }

  export default userReducer; 