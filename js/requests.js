import state from "./state.js";

async function getCodes() {
  try {
    const response = await fetch(`${state.url}/codes`);
    const data = await response.json();
    if (data.result === "success") {
      state.codes = data.supported_codes;
    }
  } catch (error) {
    return "404";
  }
}

export { getCodes };
