import { combineReducers } from "redux";
import cardsReducer from "./cards/cardsReducer";
import filterCards from "./cards/filterCards";
import pageReducer from "./cards/pagesReducer";

export default combineReducers({
  cards: cardsReducer,
  filter: filterCards,
  pages: pageReducer,
});
