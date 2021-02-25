const initialState = {
  isLoading: true,
  items: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default cardReducer;
