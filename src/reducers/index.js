import { combineReducers } from 'redux';

import characters from './charactersReducer';
import character from './characterReducer';
import locations from './locationsReducer';
import location from './locationReducer';
import zombies from './zombiesReducer';
import zombie from './zombieReducer';

export default combineReducers({
  characters,
  character,
  locations,
  location,
  zombies,
  zombie
})
