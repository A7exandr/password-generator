const characters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
  "<", ">", ".", "?", "/"
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
  let pas1 = '';
  let pas2 = '';

  for (let i = 0; i < 15; i++) {
    pas1 += getRandomCharacter();
    pas2 += getRandomCharacter();
  }

  password1.textContent = pas1;
  password2.textContent = pas2;

  pas1 = '';
  pas2 = '';
}