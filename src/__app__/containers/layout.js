import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import withRouterReduxParams from 'common/with-router-redux-params';
import { makeTitleSelector } from '../selectors';
import Layout from '../components/layout';

export const mapStateToProps = createStructuredSelector({
  title: makeTitleSelector()
});

export const mapDispatchToProps = {
  //†action
};

export default compose(
  withRouterReduxParams,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
)(Layout);
