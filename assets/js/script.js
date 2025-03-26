const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

let listInput = [];

const numPattern =
  /^(?:1[ ]?)?(?:\(([0-9]{3})\)[ -]?|([0-9]{3})[ -]?)([0-9]{3})[ -]?([0-9]{4})$/;

const checkInput = () => {
  const inputList = listInput
    .map((input) => {
      const isValidNumber = isValid(input);
      return `
    <li>
    <span class="text">${isValidNumber ? "Valid" : "Invalid"} US number: </span>
    <span class="value">${input}</span>
    </li>
    `;
    })
    .reverse();

  results.innerHTML = `<ul>${inputList}</ul>`;
};

const isValid = (num) => {
  return numPattern.test(num);
};

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  listInput.push(userInput.value);
  userInput.value = "";
  checkInput();
});

const reset = () => {
  results.innerHTML = "";
  listInput = [];
};

clearButton.addEventListener("click", reset);
