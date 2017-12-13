import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import Details from '../details';
import { ACTION } from '../../../reducer';

describe('<Details />', () => {
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
    };
    wrapper = shallow(<Details {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
