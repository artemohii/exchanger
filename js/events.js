import vars from "./vars.js";
import state from "./state.js";
import { filterCurrencies } from "./utils.js";
import { validateCurrency } from "./validate.js";
const { currenciesInputs, currenciesLists, form, amount, from, to } = vars;
const { from: fromVal, to: toVal } = state.convertData;

console.log(fromVal, toVal);
currenciesInputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.nextElementSibling.classList.add("active");
  });

  input.addEventListener("input", filterCurrencies);
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("exchanger__input")) {
    currenciesLists.forEach((list) => {
      list.style.height = "0";
    });
  }
});

currenciesLists.forEach((list) => {
  list.addEventListener("click", ({ target }) => {
    if (target.classList.contains("exchanger__li")) {
      const input = list.previousElementSibling;
      input.value = target.textContent.slice(0, 3);
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  state.convertData = {
    amount: amount.value,
    from: from.value,
    to: to.value,
  };
  /* вызов фуекции по проверки кодов codes */
  validateCurrency()

});
