import axios from "axios";

export function setCards() {
  return async (dispatch) => {
    dispatch(fetchCards());
    await axios
      .get(`http://contest.elecard.ru/frontend_data/catalog.json`)
      .then((response) => {
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

export function storeClosedCards(id, image, category, filesize, timestamp) {
  return {
    type: "CLOSE_CARD",
    payload: {
      id: id,
      image: image,
      category: category,
      filesize: filesize,
      timestamp: timestamp,
      hide: true,
    },
  };
}

export function clearClosedCards() {
  return {
    type: "CLEAR_CLOSED_CARDS",
  };
}

export function fetchCardsIsFinished(data) {
  return {
    type: "FETCH_CARDS_IS_FINISHED",
    payload: data,
  };
}
