import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({});

const config = preloadState => {
  return createStore(
    reducers,
    preloadState,
    compose(applyMiddleware(thunk, logger))
  );
};

export default config;
