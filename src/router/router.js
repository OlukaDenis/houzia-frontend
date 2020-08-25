import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import Home from '../containers/Home';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default AppRouter;