/* вывести сообщение об ошибке если не совпадает код валюты с кодом из state*/
import state from "./state.js";
import vars from "./vars.js";
const { fromErrorSpan, toErrorSpan } = vars;

function validateCurrency() {
  const {
    codes,
    convertData: { from, to },
  } = state;
  

  
  const isFromCorrect = codes.some(([code]) => code === from);
  const isToCorrect = codes.some(([code]) => code === to);

  if (!isFromCorrect) {
    fromErrorSpan.textContent = "error";
  }

  if (!isToCorrect) {
    toErrorSpan.textContent = "error";
  }

  console.log(isFromCorrect, isToCorrect );
  console.log(codes, from, to);
}

export { validateCurrency };
/* добавить спаны в каждый инпут отдельно и в спаны добавить ошибки */
