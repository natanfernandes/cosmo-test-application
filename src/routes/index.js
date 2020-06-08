import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import User from '../pages/User';

export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}