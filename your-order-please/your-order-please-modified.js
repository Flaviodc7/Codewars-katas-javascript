// Kata modificado el 31/05/2022

function order(words) {
  let result = [];
  // splitting into words
  words.split(" ").map((word) => {
    // splitting into chars to search number
    a.split("").map((char) => {
      // if number found assign order
      if (parseInt(char)) {
        result[char - 1] = word;
      }
    });
  });
  return result.join(" ");
}
