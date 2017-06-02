export const getTrends = trends => ({
  type: 'GET_TRENDS',
  payload: trends,
});

export const selectTrend = selected => ({
  type: 'SELECT_TREND',
  payload: selected,
});

export const getRss = feed => ({
  type: 'GET_RSS',
  payload: feed,
});
