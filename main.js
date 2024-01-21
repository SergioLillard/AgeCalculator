// INPUTS:
const inputs = document.querySelectorAll("input");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// ALERT BOXES:
const alertBox = document.querySelectorAll(".alert-box");

const dayAlertBox = document.getElementById("day-alert-box");
const monthAlertBox = document.getElementById("month-alert-box");
const yearAlertBox = document.getElementById("year-alert-box");

// LABELS:
const labels = document.querySelectorAll("label");

const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");

// RESULTS:
const results = document.querySelectorAll("strong");

const resultYears = document.getElementById("result-years");
const resultMonths = document.getElementById("result-months");
const resultDays = document.getElementById("result-days");

// BUTTON:
const button = document.getElementById("image");

button.addEventListener("click", showAge);

function showAge() {
  // GET INPUT VALUES (DATE OF BIRTH):
  let birthDay = dayInput.value;
  let birthMonth = monthInput.value;
  let birthYear = yearInput.value;

  // GET THE CURRENT DATE:
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  if ((birthDay || birthMonth || birthYear) === "") {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    alertBox.forEach((alertBox) => {
      const newEl = document.createElement("p");
      newEl.textContent = "This field is required";
      newEl.classList.add("alert");
      alertBox.appendChild(newEl);
    });
  } else if (1 > birthDay || birthDay > 31) {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    const newEl = document.createElement("p");

    newEl.textContent = "Must be a valid day";

    newEl.classList.add("alert");

    dayAlertBox.appendChild(newEl);
  } else if (1 > birthMonth || birthMonth > 12) {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    const newEl = document.createElement("p");

    newEl.textContent = "Must be a valid month";

    newEl.classList.add("alert");

    monthAlertBox.appendChild(newEl);
  } else if (birthYear > 2024 || birthYear === "") {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    const newEl = document.createElement("p");

    newEl.textContent = "Must be in the past";

    newEl.classList.add("alert");

    yearAlertBox.appendChild(newEl);
  } else if (
    birthYear == currentYear &&
    birthMonth == currentMonth &&
    birthDay > currentDay
  ) {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    alertBox.forEach((alertBox) => {
      const newEl = document.createElement("p");
      newEl.textContent = "Must be in the past";
      newEl.classList.add("alert");
      alertBox.appendChild(newEl);
    });
  } else if (birthYear == currentYear && birthMonth > currentMonth) {
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    inputs.forEach((input) => {
      input.classList.add("alert-border");
    });

    labels.forEach((label) => {
      label.classList.add("alert-label");
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    alertBox.forEach((alertBox) => {
      const newEl = document.createElement("p");
      newEl.textContent = "Must be in the past";
      newEl.classList.add("alert");
      alertBox.appendChild(newEl);
    });
  } else {
    // Clears everything first:
    alertBox.forEach((alertBox) => {
      alertBox.innerHTML = "";
    });

    inputs.forEach((input) => {
      input.classList.remove("alert-border");
    });

    labels.forEach((label) => {
      label.classList.remove("alert-label");
    });

    results.forEach((result) => {
      result.textContent = "--";
    });

    math();
  }
}

function math() {
  // GET INPUT VALUES (DATE OF BIRTH):
  let birthDay = dayInput.value;
  let birthMonth = monthInput.value;
  let birthYear = yearInput.value;

  // GET THE CURRENT DATE:
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  console.log(currentDate);
  console.log(currentDay, currentMonth, currentYear);

  console.log(birthDay, birthMonth, birthYear);
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (birthMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let ageDays = currentDay - birthDay;
  let ageMonths = currentMonth - birthMonth;
  let ageYears = currentYear - birthYear;

  console.log(ageYears, ageMonths, ageDays);

  resultYears.textContent = ageYears;
  resultMonths.textContent = ageMonths;
  resultDays.textContent = ageDays;
}
