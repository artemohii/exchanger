import vars from "./vars.js";
import state from "./state.js";
import { filterCurrencies } from "./utils.js";
import { validateCurrency } from "./validate.js";
const {
  currenciesInputs,
  currenciesLists,
  form,
  amount,
  from,
  to,
  toErrorSpan,
  fromErrorSpan,
  reverseButton,
} = vars;

currenciesInputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.nextElementSibling.style.height = "200px";
    /* ??? */
  });

  input.addEventListener("input", filterCurrencies);
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("exchanger__input")) {
    currenciesLists.forEach((list) => {
      list.style.height = "0";

      /* ??? */
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

  if (
    !validateCurrency(from.value, fromErrorSpan) ||
    !validateCurrency(to.value, toErrorSpan)
  ) {
    return;
  }
});

reverseButton.addEventListener("click", () => {
  const { from: fromCode, to: toCode } = state.convertData;

  if (!fromCode || !toCode) {
    return;
  }

  state.convertData = {
    from: toCode,
    to: fromCode,
  };

  from.value = toCode;
  to.value = fromCode;
});
