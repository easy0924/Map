import { About, Home } from 'components';
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Redirect to='/home' />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;