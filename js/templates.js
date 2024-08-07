import state from "./state.js";
import { findFullName } from "./utils.js";

function createResultTemplate() {
  const {
    convertData: { amount },
    convertResult: {
      baseCode,
      targetCode,
      convertResult,
      convertRate,
      lastUpdate,
    },
  } = state;

  return `
    <p>${amount} ${baseCode} ${findFullName(
    baseCode
  )} = ${convertResult} ${targetCode} ${findFullName(targetCode)}</p>
    <p>1 ${baseCode} = ${convertRate} ${targetCode}</p>
    <p>Last update: ${lastUpdate}</p>
  `;
}

export { createResultTemplate };
