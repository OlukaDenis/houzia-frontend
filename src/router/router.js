import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import Home from '../containers/Home';
import AddHouse from '../containers/AddHouse';
import MyProfile from '../containers/MyProfile';
import HouseDetails from '../containers/HouseDetails';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/newHouse" component={AddHouse} />
      <Route path="/profile" component={MyProfile} />
      <Route path="/house/:id" component={HouseDetails} />
    </Switch>
  </Router>
)

export default AppRouter;