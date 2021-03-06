import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './style.css';

import Layout from './components/Layout';
import Splash from './components/Splash';
import Search from './components/Search';
import Fighters from './components/Fighters';
import Fighter from './components/Fighter';
import Teams from './components/Teams';
import Events from './components/Events';
import Input from './components/Input';

import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash} />
        <Route path='/search' component={Search} />
        <Route path='/events' component={Events} />
        <Route path='/teams' component={Teams} />
        <Route path='/add' component={Input} />
        <Route path='/fighters' component={Fighters} />
        <Route path='/fighter/:id' component={Fighter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
