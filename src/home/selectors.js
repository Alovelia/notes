import { createSelector } from 'reselect';

export const selectHome = state => state.get('home');

export const makeSelectFolders = () => createSelector(
  selectHome,
  homeState => homeState && homeState.get('folders').toJS()
);
