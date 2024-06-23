import state from "./state.js";
import vars from "./vars.js";

const { currenciesLists } = vars;

function renderCurrenciesList(codes = state.codes) {
  currenciesLists.forEach((list) => {
    renderCurrenciesItems(codes, list);
  });
}

function renderFilteredCurrencies(codes, list) {
  renderCurrenciesItems(codes, list);
}

function renderCurrenciesItems(codes, list) {
  let listItems = "";
  codes.forEach(([code, name]) => {
    listItems += `<li class="exchanger__li">${code} | ${name} </li>`;
  });
  list.innerHTML = listItems;
}

/* function renderCurrenciesList(codes) {
  currenciesLists.forEach((list) => {
    let listItems = "";
    state.codes.forEach(([code, name]) => {
      if (code.toLowerCase().slice(0, 3) === filter.toLowerCase()) {
        listItems += `<li class="exchanger__li">${code} | ${name}</li>`;
      } else {
        list.previousElementSibling.style.border = "1px solid red";
      }
    });
    list.innerHTML = listItems;
  });
} */

export { renderCurrenciesList, renderFilteredCurrencies };
