const trendReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRENDS':
      return action.payload;
    default:
      return state;
  }
};

export default trendReducer;
