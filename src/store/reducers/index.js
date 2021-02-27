import { combineReducers } from "redux";
import cardsReducer from "./cards/cardsReducer";
import filterCards from './cards/filterCards'
export default combineReducers({
  cards: cardsReducer,
  filter: filterCards
});
