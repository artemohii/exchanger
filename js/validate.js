/* вывести сообщение об ошибке если не совпадает код валюты с кодом из state*/
import state from "./state.js";

function validateCurrency(currency, errorSpan) {
  const { codes } = state;

  const isCorrect = codes.some(([code]) => code === currency);

  if (!isCorrect) {
    errorSpan.textContent = "Choose correct currency";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

export { validateCurrency };
/* добавить спаны в каждый инпут отдельно и в спаны добавить ошибки */
