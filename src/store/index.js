/* import/no-named-default: 0 */
/**
 * Create final store using all reducers and applying middleware
 */
import { createBrowserHistory } from 'history';
// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// Import all reducers
import * as reducers from 'reducers';
// Import all epics
import epics from 'epics';

// Configured reducer to store state at state.router
export const history = createBrowserHistory();
const reducer = combineReducers({ ...reducers });
const epic = combineEpics(...epics);

const epicMiddleware = createEpicMiddleware(epic);

const store = compose(
  applyMiddleware(routerMiddleware(history), epicMiddleware),
  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(connectRouter(history)(reducer));

export default store;
