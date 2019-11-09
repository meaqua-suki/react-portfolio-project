import { User } from "firebase";
import {UserActionTypes} from '../user/user.action-types';

const {SET_CURRENT_USER} = UserActionTypes;

export const setCurrentUser = (user:User) => (
  {
    type:SET_CURRENT_USER,
    payload:user
  }
)
