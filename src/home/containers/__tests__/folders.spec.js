import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { fromJS } from 'immutable';
import noop from 'lodash/noop';
import FoldersConnected, { FoldersContainer } from '../folders';

describe('<FoldersConnected />', () => {
  let wrapper;
  let store;
  beforeAll(() => {
    const initialState = fromJS({});
    const props = {
      get: noop,
    };
    store = createMockStore(initialState);
    wrapper = shallow(<FoldersConnected store={store} {...props} />);
  });

  it('has proper component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
