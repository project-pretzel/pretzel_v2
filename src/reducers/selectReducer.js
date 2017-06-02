const selectReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_TREND':
      return action.payload;
    default:
      return state;
  }
};

export default selectReducer;
