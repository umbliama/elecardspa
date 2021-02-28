export function setCurrentPage(curPage) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: curPage,
  };
}
export function setTotalPages(totalCount, perPage) {
  return {
    type: "SET_TOTAL_PAGES",
    payload: Math.ceil(totalCount / perPage),
  };
}
