import react from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './style.css';

import Layout from './components/Layout';
import Splash from './components/Splash';
import Search from './components/Search';
import Character from './components/Character';

import store from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash} />
        <Route path='/search' component={Search} />
        <Route path='/character/:id' component={Character} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
