/* вывести сообщение об ошибке если не совпадает код валюты с кодом из state*/
import state from "./state.js";

function validateCurrency(input) {
  const { codes } = state;
  const spanError = input.previousElementSibling;

  const isCorrect = codes.some(([code]) => code === input.value);

  if (!isCorrect) {
    spanError.textContent = "Choose correct currency";
    /* добавить класс и застилизовать  */
    return false;
  } else {
    spanError.textContent = "";
    return true;
  }
}

export { validateCurrency };
/* добавить спаны в каждый инпут отдельно и в спаны добавить ошибки */
