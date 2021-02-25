const initialState = {
  isLoading: false,
  items: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_IS_LOADING":
      return {
        ...state,
        isLoading:true
      };
    case "FETCH_CARDS_IS_FINISHED":
      return{
        ...state,
        items: action.payload,
        isLoading:false
      }

    default:
      return state;
  }
};

export default cardReducer;
