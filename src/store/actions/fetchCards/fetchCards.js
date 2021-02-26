import axios from "axios";

export function setCards() {
  return async dispatch  => {
    dispatch(fetchCards())
    await axios
      .get(`http://contest.elecard.ru/frontend_data/catalog.json`)
      .then( response => {
        dispatch(fetchCardsIsFinished(response.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
export function fetchCards() {
  return {
    type: "FETCH_CARDS_IS_LOADING",
  };
}
export function fetchCardsIsFinished(data) {
  return {
    type:"FETCH_CARDS_IS_FINISHED",
    payload: data,
  }
}

