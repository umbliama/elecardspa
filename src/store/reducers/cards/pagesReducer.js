const initialState = {
  totalCount: 0,
  perPage: 12,
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
    case "incCurPage":
      return {
        ...state,
        currentPage: (state.currentPage += 1),
      };
    case "decCurPage":
      return {
        ...state,
        currentPage: (state.currentPage -= 1),
      };
    default:
      return state;
  }
};

export default pagesReducer;
