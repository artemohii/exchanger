import state from "./state.js";
import { renderFilteredCurrencies } from "./renders.js";

function filterCurrencies(e) {
  const value = e.target.value.toUpperCase();
  e.target.value = value;
  const currentList = e.target.nextElementSibling;
  const filteredCodes = state.codes.filter(
    ([code, name]) => code.includes(value) || name.toUpperCase().includes(value)
  );
  controlListHeight(currentList, filteredCodes.length);
  renderFilteredCurrencies(filteredCodes, currentList);
}

function controlListHeight(list, length) {
  if (length <= 6) {
    list.style.height = "fit-content";
  } else {
    list.style.height = "200px";
  }
}

export { filterCurrencies };
