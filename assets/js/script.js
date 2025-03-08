const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result-div");

const numPattern =
  /^(?:1[ ]?)?(?:\(([0-9]{3})\)[ -]?|([0-9]{3})[ -]?)([0-9]{3})[ -]?([0-9]{4})$/;

const isValid = (num) => {
  numPattern.lastIndex = 0; 
  return numPattern.test(num);

}
checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  result.innerHTML = isValid(userInput.value)
    ? `<span class="text">Valid US number:</span><span class="value">${userInput.value}</span>`
    : `<span class="text">Invalid US number:</span> <span class="value">${userInput.value}</span>`;
});

