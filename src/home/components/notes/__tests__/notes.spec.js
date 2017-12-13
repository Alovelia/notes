import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import Notes from '../notes';
import { ACTION } from '../../../reducer';

describe('<Notes />', () => {
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
      notes: []
    };
    wrapper = shallow(<Notes {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
