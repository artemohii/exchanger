import vars from "./vars.js";
const { currenciesInputs, currenciesLists } = vars;

currenciesInputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.nextElementSibling.classList.add("active");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("exchanger__input")) {
    currenciesLists.forEach((list) => {
      list.classList.remove("active");
    });
  }
  if (e.target.classList.contains("exchanger__li")) {
    // console.log(e.target.textContent.slice(0, 3));
    // const input = document.querySelector('.exchanger__input')
    const input = e.target.closest(".exchanger__currencies").previousElementSibling
    
    // console.log(input);
    input.value = e.target.textContent.slice(0, 3);
  }
});

/* при клике на li добавлять его в input с помощью e.target */
