import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Login from './Views/Login';
import Home from './Views/Home';

export default function App() {
  return (
     <Router>
        <Switch>
           <Route path='/login' exact component={Login} />
           <Route path='/'      component={Home} />
        </Switch>
     </Router>
  )
}
