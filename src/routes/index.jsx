import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Search from '../pages/Search';

// traz o redirecionamento dinâmico de rotas de acordo com o path da aplicação
export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search/:username">
          <Search />
        </Route>
        <Route exact path="/user/:username">
          <User />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}