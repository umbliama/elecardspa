const initialState = {
  isOpen: false,
};

const treeviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_VIEW":
      return {
        ...state,
        isOpen: true,
        isLoading: true,
      };
    case "CLOSE_VIEW":
      return {
        ...state,
        isOpen: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default treeviewReducer;
