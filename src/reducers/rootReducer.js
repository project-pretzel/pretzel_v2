import { combineReducers } from 'redux';
import trendReducer from './trendReducer';

const allReducers = combineReducers({
  trends: trendReducer,
});

export default allReducers;
