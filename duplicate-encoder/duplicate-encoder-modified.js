// Kata resuelto el 02/06/2022

function duplicateEncode(word) {
  let letters = [...new Set(word.toLowerCase())];
  let result = [];
  letters.map((letter) => {
    let ar = [];
    word
      .toLowerCase()
      .split("")
      .map((wordLetter, position) => {
        wordLetter === letter && ar.push(position);
      });
    if (ar.length === 1) {
      result[ar] = "(";
    } else {
      ar.map((a) => {
        result[a] = ")";
      });
    }
    ar = [];
  });
  return result.join("");
}
