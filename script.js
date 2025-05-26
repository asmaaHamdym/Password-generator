const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
function validateInputs() {
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length should be between 8-128 characters");
    return false;
  }

  if (numbers + special > passwordLength) {
    alert("Special + number count exceeds total length");
    return false;
  }

  return true;
}
function handleInputChange(e) {
  passwordLength = parseInt(lengthInput.value) || 15;
  numbers = parseInt(numbersInput.value) || 3;
  special = parseInt(specialInput.value) || 3;
}
function copyText(e) {
  if (e.target.textContent) {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Copied! " + e.target.textContent);
  }
}
const generatePassword = () => {
  if (!validateInputs()) {
    return;
  }
  let result1 = "";
  let result2 = "";

  const regularCharsCount = passwordLength - numbers - special;

  for (i = 0; i < regularCharsCount; i++) {
    idx1 = Math.floor(Math.random() * characters.slice(0, 52).length);
    idx2 = Math.floor(Math.random() * characters.slice(0, 52).length);

    result1 += characters[idx1];
    result2 += characters[idx2];
  }
  for (j = 0; j < numbers; j++) {
    idx1 = Math.floor(Math.random() * characters.slice(52, 62).length);
    idx2 = Math.floor(Math.random() * characters.slice(52, 62).length);

    result1 += characters[idx1 + 52];
    result2 += characters[idx2 + 52];
  }
  for (k = 0; k < special; k++) {
    idx1 = Math.floor(Math.random() * characters.slice(62).length);
    idx2 = Math.floor(Math.random() * characters.slice(62).length);

    result1 += characters[idx1 + 62];
    result2 += characters[idx2 + 62];
  }
  result1Element.textContent = result1;
  result2Element.textContent = result2;
};

const lengthInput = document.querySelector(".length");
const numbersInput = document.querySelector(".numbers");
const specialInput = document.querySelector(".special");

const inputsElement = document.querySelector(".inputs");
inputsElement.addEventListener("input", handleInputChange);

let result1Element = document.querySelector(".result1");
let result2Element = document.querySelector(".result2");

const passwordElement = document.querySelector(".results");
passwordElement.addEventListener("click", copyText);

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", generatePassword);

let passwordLength = parseInt(lengthInput.value) || 15;
let numbers = parseInt(numbersInput.value) || 3;
let special = parseInt(specialInput.value) || 3;

// dark mode logic

let darkmode = localStorage.getItem("darkmode");
console.log(darkmode);

const body = document.querySelector("body");
if (darkmode) {
  body.classList.add("darkmode");
}

const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  if (body.classList.contains("darkmode")) {
    localStorage.setItem("darkmode", "true");
  } else {
    localStorage.setItem("darkmode", "false");
  }
});
