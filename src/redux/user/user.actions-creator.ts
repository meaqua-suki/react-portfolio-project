import { User } from "firebase";
import { UserState } from "../Statetypes/UserState";

export const setCurrentUser = (user:User) => (
  {
    type:"SET_CURRENT_USER",
    payload:user
  }
)
