import state from "./state.js";
import { renderCurrenciesItems } from "./renders.js";

function filterCurrencies(e) {
  const value = e.target.value.toUpperCase();
  e.target.value = value;
  const currentList = e.target.nextElementSibling;
  const filteredCodes = state.codes.filter(
    ([code, name]) => code.includes(value) || name.toUpperCase().includes(value)
  );
  state.filteredCodes = filteredCodes;
  controlListHeight(currentList);
  renderCurrenciesItems(filteredCodes, currentList);
}

function controlListHeight(list) {
  const length = state.filteredCodes.length;
  if (length === 0 || length > 6) {
    list.style.height = "200px";
  } else if (length <= 6) {
    list.style.height = "fit-content";
  }
  state.filteredCodes = [];
}

function findFullName(code) {
  const [, name] = state.codes.find((item) => item.includes(code));
  return name;
  // find, findIndex, reduce, sort, filter, map, forEach, some, every

  /* let baseName = "";
  let targetName = "";

  state.codes.forEach(([code, name]) => {
    if (code === state.convertResult.baseCode) {
      baseName = name;
      // console.log(name);
    }
    if (code === state.convertResult.targetCode) {
      targetName = name;
    }
    console.log(code);
  });
  // console.log(state.codes);
  return [baseName, targetName]; */
}

export { filterCurrencies, controlListHeight, findFullName };
