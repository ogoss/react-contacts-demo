import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import Moment from './components/moment/moment';
import Contact from './components/contact/contact';
import User from './components/user/user';
import Login from './components/auth/login';
import NotFound from './components/error/notFound';

// 定义页面路由
const AppRoutes = (
    <Route component={App}>
      <Route path="/" component={Home}>
        <IndexRoute component={Moment} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={User} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Route>
);

export default AppRoutes;
