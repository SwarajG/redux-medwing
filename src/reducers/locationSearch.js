const locationSearch = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_ADDRESS':
      return action.address.trim();
    default:
      return state;
  }
};

export default locationSearch;