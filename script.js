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
function copyText(e) {
  if (e.target.textContent) {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Copied! " + e.target.textContent);
  }
}
const generatePassword = () => {
  let result1 = "";
  let result2 = "";
  let passwordLength = lengthInput.value ? parseInt(lengthInput.value) : 15;

  const numbersCount = numbersInput.value ? parseInt(numbersInput.value) : 0;
  const specialCount = specialInput.value ? parseInt(specialInput.value) : 0;

  const regularCharsCount = passwordLength - numbersCount - specialCount;

  for (i = 0; i < regularCharsCount; i++) {
    idx1 = Math.floor(Math.random() * characters.slice(0, 52).length);
    idx2 = Math.floor(Math.random() * characters.slice(0, 52).length);

    result1 += characters[idx1];
    result2 += characters[idx2];
  }
  for (j = 0; j < numbersInput.value; j++) {
    idx1 = Math.floor(Math.random() * characters.slice(52, 62).length);
    idx2 = Math.floor(Math.random() * characters.slice(52, 62).length);

    result1 += characters[idx1 + 52];
    result2 += characters[idx2 + 52];
  }
  for (k = 0; k < specialInput.value; k++) {
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

let result1Element = document.querySelector(".result1");
let result2Element = document.querySelector(".result2");

const passwordElement = document.querySelector(".results");
passwordElement.addEventListener("click", copyText);

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", generatePassword);
