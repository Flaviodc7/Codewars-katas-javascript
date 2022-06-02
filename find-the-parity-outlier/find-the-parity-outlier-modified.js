// Kata modificado el 02/06/2022

function findOutlier(integers) {
  let notOdd = [];
  let odd = [];
  let index = 0;
  // Looking for the unique odd or Not Odd, do while breaks when is found
  do {
    integers[index] % 2 == 0
      ? notOdd.push(integers[index])
      : odd.push(integers[index]);
    index++;
  } while (notOdd.length < 1 || odd.length < 1);
  return odd.length === 1 ? odd[0] : notOdd[0];
}
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
