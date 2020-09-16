import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk);

  const store = createStore(rootReducer(), initialState, middleware);

  return store;
};

export default configureStore;
