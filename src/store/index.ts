import {
  createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';
import rootReducers from './middlewares';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composeEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducers, composeEnhancers);
  return store;
}
