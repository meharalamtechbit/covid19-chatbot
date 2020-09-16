import { combineReducers } from 'redux';

import { sharedReducer } from './modules';

const rootReducer = () =>
  combineReducers({
    shared: sharedReducer,
  });

export default rootReducer;
