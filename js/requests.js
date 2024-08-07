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
  const { amount, from, to } = state.convertData;
  try {
    const response = await fetch(`${state.url}/pair/${from}/${to}/${amount}`);
    const data = await response.json();
    if (data.result === "success") {
      state.convertResult = {
        lastUpdate: data.time_last_update_utc,
        baseCode: data.base_code,
        targetCode: data.target_code,
        convertRate: data.conversion_rate,
        convertResult: data.conversion_result,
      };
    }
  } catch (error) {
    console.error("Error", error);
  }
}

export { getCodes, getConvertionResult };
