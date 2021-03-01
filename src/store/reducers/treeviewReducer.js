const initialState = {
    isOpen:false
}

const treeviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case "EXPAND_VIEW":
        return {
          ...state,
          isOpen :true
        };
      default:
        return state;
    }
  };
  
  export default treeviewReducer;