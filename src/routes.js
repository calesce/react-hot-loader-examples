import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Counter from './components/Counter';

const routes = () => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='counter' component={Counter} />
    </Route>
  );
};

export default routes;
