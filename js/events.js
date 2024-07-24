import vars from "./vars.js";
import state from "./state.js";
import { controlListHeight, filterCurrencies } from "./utils.js";
import { validateCurrency } from "./validate.js";
import { getConvertionResult } from "./requests.js";
import { renderResult } from "./renders.js";
const {
  currenciesInputs,
  currenciesLists,
  form,
  amount,
  from,
  to,
  reverseButton,
} = vars;

currenciesInputs.forEach((input) => {
  input.addEventListener("click", () => {
    controlListHeight(input.nextElementSibling);
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  state.convertData = {
    amount: amount.value,
    from: from.value,
    to: to.value,
  };

  const isFromValid = validateCurrency(from);
  const isToValid = validateCurrency(to);

  if (!isFromValid || !isToValid) {
    return;
  }

  await getConvertionResult();
  renderResult();
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
