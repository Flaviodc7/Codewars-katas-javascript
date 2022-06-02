// Kata resuelto el 06/12/2021

function findOutlier(integers) {
  let notOdd = [];
  let odd = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      notOdd.push(i);
      if (odd.length > 1) {
        break;
      }
    } else {
      odd.push(i);
      if (notOdd.length > 1) {
        break;
      }
    }
  }
  return notOdd.length == 1 ? integers[notOdd[0]] : integers[odd[0]];
}
findOutlier([160, 3, 1719, 19, 11, 13, -21]);
