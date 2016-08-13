import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import AppRoutes from './routers';

// Render the main component into the dom
ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
    {AppRoutes}
  </Router>
, document.querySelector('#app'));
