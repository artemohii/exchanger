import state from "./state.js";
import vars from "./vars.js";

const { currenciesLists } = vars;

function renderCurrenciesList() {
  currenciesLists.forEach((list) => {
    let listItems = "";
    state.codes.forEach(([code, name]) => {
      listItems += `<li class="exchanger__li">${code} | ${name} </li>`;
      /* const newItem = document.createElement("li");
      newItem.classList.add("exchanger__li");
      newItem.textContent = item; */
      // list.append(newItem);
    });
    list.innerHTML = listItems;
  });
}

export { renderCurrenciesList };
