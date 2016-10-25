import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { getCharacters } from './actions/UserActions';

function* fetchCharacters(action) {
  try {
    const characters = yield call(getCharacters, action.payload);
    yield put({type: 'GET_CHARACTERS', payload: characters});
  } catch(err) {
    yield put({type: 'GET_ERROR', message: err.message});
  }
}

function* mySaga() {
  yield* takeEvery('FETCH_CHARACTERS', fetchCharacters)
}

export default mySaga;
