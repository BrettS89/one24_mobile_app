import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxReset from 'redux-reset';
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares), reduxReset()),
  );

  sagaMiddleware.run(rootSagas);

  return store;
};
