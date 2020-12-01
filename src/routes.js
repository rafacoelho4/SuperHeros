import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;