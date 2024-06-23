import { getCodes } from "./requests.js";
import { renderCurrenciesList } from "./renders.js";

async function init() {
  await getCodes();
  renderCurrenciesList();
}

init();

// проверка значения из инпута на совпадение с кодами валют
