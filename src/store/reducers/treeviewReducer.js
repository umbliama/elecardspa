const initialState = {
  isOpen: false,
  isLoading:false,
};

const treeviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_VIEW":
      return {
        ...state,
        isOpen: true, 
      };
    case "CLOSE_VIEW":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default treeviewReducer;
