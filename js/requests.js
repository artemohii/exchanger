import state from "./state.js";

async function getCodes() {
  try {
    const response = await fetch(`${state.url}/codes`);
    const data = await response.json();
    if (data.result === "success") {
      state.codes = data.supported_codes;
      return data;
    }
  } catch (error) {
    return "404";
  }
}

async function getConvertionResult() {
  /* вывести в консоль пример обьекта с ответом  */
}

export { getCodes };
