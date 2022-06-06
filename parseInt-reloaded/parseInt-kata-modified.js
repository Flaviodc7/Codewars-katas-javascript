// Kata modificado el 06/06/2022

const TWENTY_TO_NINETY = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const ONE_TO_NINETEEN = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

function parseInt(string) {
  let result = [];
  // exceptional case of one million
  if (string === "one million") {
    return 1000000;
  }
  // exceptional case of zero
  if (string === "zero") {
    return 0;
  }
  // Replacing any " and " and "-" with a space
  string
    .replace(/ and |-/gi, " ")
    .split(" ")
    .map((str) => {
      // if there's thousands
      if (str === "thousand") {
        result.map((num, arrN) => {
          result[arrN] = num * 1000;
        });
        // if some number from 1 to 9 is hundred
      } else if (str === "hundred") {
        result[result.length - 1] *= 100;
        // if there's tens or units
      } else if (str.endsWith("y")) {
        result.push(TWENTY_TO_NINETY[str]);
      } else {
        result.push(ONE_TO_NINETEEN[str]);
      }
    });
  return result.reduce((a, b) => a + b);
}
