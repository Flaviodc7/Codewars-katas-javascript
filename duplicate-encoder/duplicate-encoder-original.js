// Kata resuelto el 06/12/2021

function duplicateEncode(word) {
  let letters = [...new Set(word.toLowerCase())];
  let ar = [];
  let result = [];
  letters.map((letter) => {
    word
      .toLowerCase()
      .split("")
      .map((a, b) => {
        a == letter && ar.push(b);
        console.log(ar);
      });
    if (ar.length == 1) {
      result[ar[0]] = "(";
    } else {
      ar.map((a) => {
        result[a] = ")";
      });
    }
    ar = [];
  });
  return result.join("");
}
