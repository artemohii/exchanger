import state from "./state.js";

function validateCurrency(input) {
  const { codes } = state;
  const spanError = input.previousElementSibling;

  const isCorrect = codes.some(([code]) => code === input.value);

  if (!isCorrect) {
    spanError.textContent = "Choose correct currency";
    return false;
  } else {
    spanError.textContent = "";
    return true;
  }
}

export { validateCurrency };
