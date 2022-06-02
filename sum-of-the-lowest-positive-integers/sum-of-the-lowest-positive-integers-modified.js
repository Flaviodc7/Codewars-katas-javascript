// Kata modificado el 02/06/2022

function sumTwoSmallestNumbers(numbers) {
  // Sorting and summing the first two values
  let a = numbers.sort((a, b) => a - b)[0];
  return a + numbers[1];
}
