// Kata resuelto el 02/06/2022

function duplicateEncode(word) {
  let letters = [...new Set(word.toLowerCase())];
  let result = [];
  // Mapping letter by letter
  letters.map((letter) => {
    // Creating array with positions of the letter
    let arrayPosition = [];
    // mapping the original string
    word
      .toLowerCase()
      .split("")
      .map((wordLetter, position) => {
        wordLetter === letter && arrayPosition.push(position);
      });
      // if to put "(" if letter appears 1 time or ")" for 2 or more 
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