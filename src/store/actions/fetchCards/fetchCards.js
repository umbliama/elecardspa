import axios from "axios";

export function fetchCards(data) {
  return {
    type: "FETCH_CARDS",
    payload: data,
  };
}
export function setIsLoading() {
  return {
    type: "SET_IS_LOADING",
    payload: true,
  };
}
export function setCards() {
  return (dispatch) => {
    console.log("test");
    return axios
      .get(`http://contest.elecard.ru/frontend_data/catalog.json`)
      .then((response) => {
        dispatch(fetchCards(response.data));
        setIsLoading();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
