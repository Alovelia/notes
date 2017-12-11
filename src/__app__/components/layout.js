/**
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ErrorBoundary from 'react-error-boundary';
import Title from 'common/title/title';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import 'typeface-roboto/index.css';

const theme = createMuiTheme();

export default function Layout(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Helmet
        titleTemplate="%s"
        defaultTitle="..."
        meta={[
          { name: 'description', content: '...' },
        ]}
      />
      <Title id={props.title} />

      {/*<Header />*/}
      <ErrorBoundary>
        {React.Children.toArray(props.children)}
      </ErrorBoundary>
      {/*<Footer />*/}
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
Layout.defaultProps = {
  children: null,
  title: '_',
};
