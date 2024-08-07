import { getCodes } from "./requests.js";
import { renderCurrenciesList } from "./renders.js";

async function init() {
  await getCodes();
  renderCurrenciesList();
}

init();

