import { createSelector } from 'reselect';

export const selectHome = state => state.get('home');

export const makeSelectFolders = () => createSelector(
  selectHome,
  homeState => homeState && homeState.get('folders').toJS()
);

export const makeSelectNotes = () => createSelector(
  selectHome,
  homeState => homeState && homeState.get('notes').toJS()
);

