const initialState = {
  totalCount: 0,
  perPage: 10,
  currentPage: 1,
};

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
};

export default pagesReducer;
