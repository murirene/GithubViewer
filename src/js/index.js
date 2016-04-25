/* Application Entry point. Injects the Store and loads the Route. */

import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './views/App';
import WhackAMoleContainer from './containers/WhackAMole';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={WhackAMoleContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
