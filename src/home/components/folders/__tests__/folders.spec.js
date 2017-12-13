import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import Folders from '../folders';
import { ACTION } from '../../../reducer';

describe('<Folders />', () => {
  let wrapper;
  let stub;
  beforeAll(() => {
    // stub = sinon.stub(ACTION, 'get').returns({ type: 'mock' });
  });
  afterAll(() => {
    // stub.restore();
  });
  it('when initializing, the expected output is rendered', () => {
    const props = {
      // trigger: noop
      folders: []
    };
    wrapper = shallow(<Folders {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
