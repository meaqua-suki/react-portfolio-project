import { User } from "firebase";

export interface UserState {
  currentUser:User|object|null;
}