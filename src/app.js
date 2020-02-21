import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import './styles/_global.scss'

const DetailView = lazy(() => import('./containers/DetailView'));
const Listing = lazy(() => import('./containers/Listing'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Listing} />
        <Route path="/:productID" component={DetailView} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
