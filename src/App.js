import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard'
import Services from './views/Services'
import Consultory from './views/Consultory';
import Trainings from './views/Trainings'
import Health from './views/Health';
import Contact from './views/Contact';
import NotFound from './views/NotFound'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import setAuthToken from './utils/setAuthToken'

// Actions 
import { authMe } from './redux/actions/auth'


let token = localStorage.getItem('token')

if (token) {
  setAuthToken(token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(authMe())
  }, [])

  return (
    <div className="App">
      <Fragment>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Login} />
              <Route exact path="/servicios" component={Services} />
              <Route exact path="/servicios/consultoría" component={Consultory} />
              <Route exact path="/servicios/asesoría-consultoría-sistemas-de-salud-ocupacional" component={Health} />
              <Route exact path="/servicios/capacitaciones" component={Trainings} />
              <Route exact path="/contacto" component={Contact} />
              <Dashboard />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    </div>
  );
}

export default App;
