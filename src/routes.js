import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route  path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;