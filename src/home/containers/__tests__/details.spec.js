import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { fromJS } from 'immutable';
import noop from 'lodash/noop';
import DetailsConnected, { DetailsContainer } from '../details';

describe('<DetailsConnected />', () => {
  let wrapper;
  let store;
  beforeAll(() => {
    const initialState = fromJS({});
    const props = {
      getDetails: noop,
      params: {}
    };
    store = createMockStore(initialState);
    wrapper = shallow(<DetailsConnected store={store} {...props} />);
  });

  it('has proper component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
