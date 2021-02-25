import { combineReducers } from "redux";
import cardsReducer from "./cards/cardsReducer";

export default combineReducers({
  cards: cardsReducer,
});
