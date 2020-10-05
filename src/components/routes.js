import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Logged from './logged';
import Register from './register';

import NotFound from './NotFound';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path='/' component={Login} />
            <PublicRoute exact path='/register' component={Register} />
            <PrivateRoute path='/projetos' component={Logged} />
        </Switch>
    </BrowserRouter>
);

export default Routes;