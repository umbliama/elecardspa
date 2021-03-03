const initialState = {
  isLoading: false,
  items: [],
  closedCards: [],
  closedCardsPage:0
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CARDS_IS_FINISHED":
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case "CLOSE_CARD":
      return {
        ...state,
        closedCards:[...state.closedCards,action.payload],
      };
    case "CLEAR_CLOSED_CARDS":
      return {
        ...state,
        closedCards: [],
      };
    default:
      return state;
  }
};

export default cardReducer;
