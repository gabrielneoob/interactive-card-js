const formInputs = {
  name: document.getElementById("name"),
  number: document.getElementById("card-number"),
  month: document.getElementById("month-exp"),
  year: document.getElementById("year-exp"),
  cvc: document.getElementById("cvc"),
  btn: document.getElementById("submit-btn"),

  errorsMessages: {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  },
};

const inputValues = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

const errorsElements = {
  name: document.getElementById("name-error"),
  number: document.getElementById("number-error"),
  month: document.getElementById("month-error"),
  cvc: document.getElementById("cvc-error"),
};

const inputsRegex = {
  name: /^[a-zA-Z]+$/,
  number: {
    allNumbers: /^[\d\s]+$/,
  },
  month: /^\d{2}$/,
  cvc: /^\d{3}$/,
};

const formatCardNumber = (number) => {
  number = number.replace(/\D/g, "");
  let formatNumber = "";
  let countToFormater = 0;
  for (let i = 0; i < number.length; i++) {
    countToFormater += 1;
    formatNumber += number[i];
    if (countToFormater === 4) {
      formatNumber += " ";
      countToFormater = 0;
    }
  }
  return formatNumber;
};

const frontCardOutputs = {
  number: document.getElementById("output-card-number"),
  name: document.getElementById("output-name"),
  month: document.getElementById("month"),
  year: document.getElementById("year"),
};

const outputCvcCard = document.getElementById("cvc-output");
const formUser = document.querySelector("form");
const completeCard = document.getElementById("complete-card");
const continueBtn = document.getElementById("continue-btn");

const currentUser = {};

// form events

formInputs.cvc.addEventListener("keyup", (e) => {
  const { value } = e.target;
  outputCvcCard.textContent = value ? value : "000";
  inputValues.cvc = value ? value : "";
});
formInputs.name.addEventListener("keyup", (e) => {
  const { value } = e.target;
  frontCardOutputs.name.textContent = value
    ? value.toUpperCase()
    : "FELICIA LEIRE";
  inputValues.name = value ? value : "";
});

formInputs.number.addEventListener("keyup", (e) => {
  const { value } = e.target;
  frontCardOutputs.number.textContent = value
    ? value.toUpperCase()
    : "9591 6489 6389 101E";
  inputValues.number = value ? formatCardNumber(value) : "";
});

formInputs.month.addEventListener("keyup", (e) => {
  const { value } = e.target;
  frontCardOutputs.month.textContent = value ? value : "00";
  inputValues.month = value ? value : "";
});

formInputs.year.addEventListener("keyup", (e) => {
  const { value } = e.target;
  frontCardOutputs.year.textContent = value ? value : "00";
  inputValues.year = value ? value : "";
});

formInputs.btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputsRegex.name.test(inputValues.name)) {
    formInputs.errorsMessages.name = "Wrong format, letters only";
    // formInputs.name.style.borderColor = "#f00";
  } else if (inputsRegex.name.test(inputValues.name)) {
    formInputs.errorsMessages.name = "";
    // formInputs.name.style.borderColor = "gray";
  }
  if (!inputValues.name) {
    formInputs.errorsMessages.name = "Name is required.";
  } else if (inputValues.name && inputsRegex.name.test(inputValues.name)) {
    formInputs.errorsMessages.name = "";
  }

  if (!inputValues.number) {
    formInputs.errorsMessages.number = "Card Number is required.";
  } else {
    formInputs.errorsMessages.number = "";
  }

  if (!inputsRegex.number.allNumbers.test(inputValues.number)) {
    formInputs.errorsMessages.number = "Wrong format, numbers only";
  } else {
    formInputs.errorsMessages.number = "";
  }

  if (!inputsRegex.month.test(inputValues.month)) {
    formInputs.errorsMessages.month = "Wrong format, numbers only";
  } else if (inputsRegex.month.test(inputValues.month)) {
    formInputs.errorsMessages.month = "";
  }

  if (!inputValues.month) {
    formInputs.errorsMessages.month = "Cant'b be blank";
  } else if (inputValues.month && inputsRegex.month.test(inputValues.month)) {
    formInputs.errorsMessages.month = "";
  }

  if (!inputsRegex.month.test(inputValues.year)) {
    formInputs.errorsMessages.year = "Wrong format, numbers only";
  } else if (inputsRegex.month.test(inputValues.year)) {
    formInputs.errorsMessages.year = "";
  }

  if (!inputValues.year) {
    formInputs.errorsMessages.year = "Cant'b be blank";
  } else if (inputValues.year && inputsRegex.month.test(inputValues.year)) {
    formInputs.errorsMessages.year = "";
  }

  if (!inputsRegex.cvc.test(inputValues.cvc)) {
    formInputs.errorsMessages.cvc = "Wrong format, numbers only";
  } else if (inputsRegex.cvc.test(inputValues.cvc)) {
    formInputs.errorsMessages.cvc = "";
  }

  if (!inputValues.cvc) {
    formInputs.errorsMessages.cvc = "Cant'b be blank";
  } else if (inputValues.cvc && inputsRegex.cvc.test(inputValues.cvc)) {
    formInputs.errorsMessages.cvc = "";
  }

  if (formInputs.errorsMessages.name) {
    errorsElements.name.textContent = formInputs.errorsMessages.name;
    formInputs.name.style.borderColor = "#f00";
  } else {
    errorsElements.name.textContent = "";
    formInputs.name.style.borderColor = "gray";
  }
  if (formInputs.errorsMessages.number) {
    errorsElements.number.textContent = formInputs.errorsMessages.number;
    formInputs.number.style.borderColor = "#f00";
  } else {
    errorsElements.number.textContent = "";
    formInputs.number.style.borderColor = "gray";
  }
  if (formInputs.errorsMessages.month) {
    errorsElements.month.textContent = formInputs.errorsMessages.month;
    formInputs.month.style.borderColor = "#f00";
  } else {
    errorsElements.month.textContent = "";
    formInputs.month.style.borderColor = "gray";
  }
  if (formInputs.errorsMessages.cvc) {
    errorsElements.cvc.textContent = formInputs.errorsMessages.cvc;
    formInputs.cvc.style.borderColor = "#f00";
  } else {
    errorsElements.cvc.textContent = "";
    formInputs.cvc.style.borderColor = "gray";
  }

  if (
    inputValues.name &&
    inputValues.number &&
    inputValues.month &&
    inputsRegex.month.test(inputValues.month) &&
    inputValues.year &&
    inputsRegex.month.test(inputValues.year) &&
    inputValues.cvc &&
    inputsRegex.cvc.test(inputValues.cvc)
  ) {
    currentUser.name = inputValues.name;
    currentUser.number = inputValues.number;
    currentUser.month = inputValues.month;
    currentUser.year = inputValues.year;
    currentUser.cvc = inputValues.cvc;

    formUser.style.display = "none";
    completeCard.style.display = "grid";
  }
});

continueBtn.addEventListener("click", () => {
  formUser.style.display = "grid";
  completeCard.style.display = "none";

  const { name, cvc, month, number, year } = formInputs;
  name.value = "";
  cvc.value = "";
  month.value = "";
  number.value = "";
  year.value = "";

  inputValues.name = "";
  inputValues.cvc = "";
  inputValues.month = "";
  inputValues.number = "";
  inputValues.year = "";

  frontCardOutputs.name.textContent = "FELICIA LEIRE";
  frontCardOutputs.number.textContent = "9591 6489 6389 1019";
  frontCardOutputs.month.textContent = "00";
  frontCardOutputs.year.textContent = "00";
});
