import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import { ACTION } from 'app/reducers/route-reducer';
import withRourReduxParams from '../with-router-redux-params';

describe('<WithRouterRedux />', () => {
  let wrapper;
  let stub;
  beforeAll(() => {
    const mockComponent = (props) => <div>MOCK</div>;
    wrapper = shallow(withRourReduxParams(mockComponent));
    // stub = sinon.stub(ACTION, 'get').returns({ type: 'mock' });
  });
  afterAll(() => {
    // stub.restore();
  });
  it('when initializing, the expected output is rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
