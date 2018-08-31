const initialState = {};

const rssReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_FEED':
      return initialState;
    case 'GET_RSS':
      return action.payload;
    default:
      return state;
  }
};

export default rssReducer;
