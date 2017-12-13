import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import FolderItem from '../folder-item';
import { ACTION } from '../../../reducer';

describe('<FolderItem />', () => {
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
      item: {}
    };
    wrapper = shallow(<FolderItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
