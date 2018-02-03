import { createStore, combineReducers } from 'redux';
import circleRightReducer from '../reducers/circleRight';
import circleLeftReducer from '../reducers/circleLeft';

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      circleLeft: circleLeftReducer,
      circleRight: circleRightReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
