import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { fromJS } from 'immutable';
import noop from 'lodash/noop';
import NotesConnected, { NotesContainer } from '../notes';

describe('<NotesConnected />', () => {
  let wrapper;
  let store;
  beforeAll(() => {
    const initialState = fromJS({});
    const props = {
      getNotes: noop,
      params: {}
    };
    store = createMockStore(initialState);
    wrapper = shallow(<NotesConnected store={store} {...props} />);
  });

  it('has proper component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
