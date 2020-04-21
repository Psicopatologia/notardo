import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/login" component={Login} exact />
      
      <Route component={Error} />
    </Switch>
  );
}

export default App;
