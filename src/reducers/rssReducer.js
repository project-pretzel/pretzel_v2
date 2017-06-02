const rssReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RSS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default rssReducer;
