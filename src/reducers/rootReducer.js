import { combineReducers } from 'redux';
import trendReducer from './trendReducer';
import selectReducer from './selectReducer';
import rssReducer from './rssReducer';

const allReducers = combineReducers({
  trends: trendReducer,
  selected: selectReducer,
  feed: rssReducer,
});

export default allReducers;
