import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import App from './components/app';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import User from './components/user/user';
import NotFound from './components/error/notFound';

// 定义页面路由
const routers = (
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/user" component={User} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// Render the main component into the dom
ReactDOM.render(routers, document.querySelector('#app'));
