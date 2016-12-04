import { combineReducers } from 'redux';

import fighters from './fighterReducer';
import events from './eventReducer';
import teams from './teamReducer';

export default combineReducers({
  fighters,
  events,
  teams
});
