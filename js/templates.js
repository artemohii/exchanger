import state from "./state.js";

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
    <p>${amount} ${baseCode} name = ${convertResult} ${targetCode} name</p>
    <p>1 ${baseCode} = ${convertRate} ${targetCode}</p>
    <p>Last update: ${lastUpdate}</p>
  `;
}

export { createResultTemplate };
