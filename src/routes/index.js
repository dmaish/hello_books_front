import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from './../views/auth';

const Routes = () => (
    <Switch>
        <Route
            path="/"
            exact
            component={auth}
        />
    </Switch>
)

export default Routes;