import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import App from './containers/App';

const routes = (
  <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" />
      </Switch>
  </ConnectedRouter>
);

export default routes;
