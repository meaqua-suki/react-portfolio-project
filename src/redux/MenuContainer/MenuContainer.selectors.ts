import {createSelector, Selector} from 'reselect';
import { RootReducerState } from '../Statetypes/RootReducerState';
import { menuContainerState } from './menuContainerInterface';

const MenuContainerSelector:Selector<RootReducerState,menuContainerState> = (state:RootReducerState) => {
  return state.MenuContainer
}

export const sectionsSelector = createSelector(MenuContainerSelector,(MenuContainerSelector) => (
  MenuContainerSelector.sections
))

