import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectFolders,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      username: 'username',
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectFolders', () => {
  const foldersSelector = makeSelectFolders();
  it('should select folders', () => {
    const folders = [];
    const mockedState = fromJS({
      home: {
        folders,
      },
    });
    expect(foldersSelector(mockedState)).toEqual(folders);
  });
});
