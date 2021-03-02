export function setCurrentPage(curPage) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: curPage,
  };
}
export function setTotalPages(totalCount) {
  return {
    type: "SET_TOTAL_PAGES",
    payload: totalCount,
  };
}
export function incPage() {
  return {
    type: "incCurPage",
  };
}
export function decPage() {
  return {
    type: "decCurPage",
  };
}
