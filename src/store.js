import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger());

const store = createStore(reducers, compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension : f => f
));

sagaMiddleware.run(mySaga);

export default store;
