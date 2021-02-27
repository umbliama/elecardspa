const initialState = {
    filterBy:"all"
  };
  
  const filterCards = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return{
                ...state,
                filterBy:action.payload
            }
        default:
            return state;
    }
  };
  
  export default filterCards;
  