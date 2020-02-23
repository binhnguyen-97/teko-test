import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import './styles/_global.scss'
import withLayout from './hocs/withLayout';

const DetailView = withLayout(lazy(() => import('./containers/DetailView')));
const Listing = withLayout(lazy(() => import('./containers/Listing')));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/listing" component={Listing} />
        <Route path="/detail/:productID" component={DetailView} />
        <Route path="*">
          <Redirect to="/listing"/>
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
