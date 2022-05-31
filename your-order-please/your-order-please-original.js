// Kata resuelto el 09/12/2021

function order(words) {
  let position = 0;
  result = [];
  words.split(" ").map((a) => {
    a.split("").map((a) => {
      if (parseInt(a)) {
        position = a - 1;
      }
    });
    result[position] = a;
    position = 0;
  });
  return result.join(" ");
}
