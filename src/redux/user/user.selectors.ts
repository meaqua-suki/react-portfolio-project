import {createSelector, Selector} from 'reselect';
import {RootReducerState} from '../Statetypes/RootReducerState'
import {UserState} from '../Statetypes/UserState'
const selectUser:Selector<RootReducerState,UserState> = (state:RootReducerState) => state.user;


export const currentUserSelector = createSelector(
  [selectUser],
  (selectUser) => selectUser.currentUser
)