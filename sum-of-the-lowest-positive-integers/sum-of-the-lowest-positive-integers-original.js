// Kata resuelto el 06/12/2021

function sumTwoSmallestNumbers(numbers) {
  let a = numbers.sort((a, b) => a - b)[0];
  let b = numbers[1];
  return a + b;
}
