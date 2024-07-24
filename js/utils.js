import state from "./state.js";
import { renderCurrenciesItems } from "./renders.js";

function filterCurrencies(e) {
  const value = e.target.value.toUpperCase();
  e.target.value = value;
  const currentList = e.target.nextElementSibling;
  const filteredCodes = state.codes.filter(
    ([code, name]) => code.includes(value) || name.toUpperCase().includes(value)
  );
  state.filteredCodes = filteredCodes;
  controlListHeight(currentList);
  renderCurrenciesItems(filteredCodes, currentList);
}

function controlListHeight(list) {
  const length = state.filteredCodes.length;
  if (length === 0 || length > 6) {
    list.style.height = "200px";
  } else if (length <= 6) {
    list.style.height = "fit-content";
  }
}

/* найти название валюты по коду валюты (name) */

export { filterCurrencies, controlListHeight };
