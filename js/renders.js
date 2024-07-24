import state from "./state.js";
import vars from "./vars.js";
import { createResultTemplate } from "./templates.js";

const { currenciesLists, exchangerResult } = vars;

function renderCurrenciesList(codes = state.codes) {
  currenciesLists.forEach((list) => {
    renderCurrenciesItems(codes, list);
  });
}

function renderCurrenciesItems(codes, list) {
  let listItems = "";
  codes.forEach(([code, name]) => {
    listItems += `<li class="exchanger__li">${code} | ${name} </li>`;
  });
  list.innerHTML = listItems || "Currencies not found";
}

function renderResult() {
  exchangerResult.innerHTML = createResultTemplate();
}

export { renderCurrenciesList, renderResult, renderCurrenciesItems };
