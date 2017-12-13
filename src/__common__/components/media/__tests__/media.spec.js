import { shallow } from 'enzyme';
import React from 'react';
import noop from 'lodash/noop';
import { Media, MediaBody, MediaFigure } from '../media';

describe('<Media />', () => {
  let wrapper;
  it('when initializing, the expected output is rendered', () => {
    const props = {
      // trigger: noop
    };
    const mockBody = <div>MOCK BODY</div>;
    const mockFigure = <div>MOCK FIGURE</div>;
    wrapper = shallow(
      <Media {...props}>
        <MediaFigure>{mockFigure}</MediaFigure>
        <MediaBody>{mockBody}</MediaBody>
      </Media>);
    expect(wrapper).toMatchSnapshot();
  });

  it('when initializing, the expected output is rendered if MediaFigure is not the first', () => {
    const props = {
      // trigger: noop
    };
    const mockBody = <div>MOCK BODY</div>;
    const mockFigure = <div>MOCK FIGURE</div>;
    wrapper = shallow(
      <Media {...props}>
        <MediaBody>{mockBody}</MediaBody>
        <MediaFigure>{mockFigure}</MediaFigure>
      </Media>);
    expect(wrapper).toMatchSnapshot();
  });
});
