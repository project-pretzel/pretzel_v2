import { combineReducers } from 'redux';
import trendReducer from './trendReducer';
import selectReducer from './selectReducer';

const allReducers = combineReducers({
  trends: trendReducer,
  selected: selectReducer,
});

export default allReducers;
