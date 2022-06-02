// Kata resuelto el 02/06/2022

function duplicateEncode(word) {
  let letters = [...new Set(word.toLowerCase())];
  let result = [];
  letters.map((letter) => {
    let arrayPosition = [];
    word
      .toLowerCase()
      .split("")
      .map((wordLetter, position) => {
        wordLetter === letter && arrayPosition.push(position);
      });
    if (arrayPosition.length === 1) {
      result[arrayPosition] = "(";
    } else {
      arrayPosition.map((position) => {
        result[position] = ")";
      });
    }
  });
  return result.join("");
}