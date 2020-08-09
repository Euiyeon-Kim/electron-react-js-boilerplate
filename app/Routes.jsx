/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

const LazyTestPage1 = React.lazy(() => import('./containers/TestPage1'));
const Test1 = (props) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyTestPage1 {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.TESTPAGE1} component={Test1} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
