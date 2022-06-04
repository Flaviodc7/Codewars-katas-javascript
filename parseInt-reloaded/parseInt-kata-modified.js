// Kata modificado el 04/06/2022

function ToNumberTwentyToNinety(string) {
  let result = 0;
  switch (string) {
    case "twenty":
      result = 20;
      break;
    case "thirty":
      result = 30;
      break;
    case "forty":
      result = 40;
      break;
    case "fifty":
      result = 50;
      break;
    case "sixty":
      result = 60;
      break;
    case "seventy":
      result = 70;
      break;
    case "eighty":
      result = 80;
      break;
    case "ninety":
      result = 90;
      break;
  }
  return result;
}

function ToNumberOneToNineteen(string) {
  let result = 0;
  switch (string) {
    case "one":
      result = 1;
      break;
    case "two":
      result = 2;
      break;
    case "three":
      result = 3;
      break;
    case "four":
      result = 4;
      break;
    case "five":
      result = 5;
      break;
    case "six":
      result = 6;
      break;
    case "seven":
      result = 7;
      break;
    case "eight":
      result = 8;
      break;
    case "nine":
      result = 9;
      break;
    case "ten":
      result = 10;
      break;
    case "eleven":
      result = 11;
      break;
    case "twelve":
      result = 12;
      break;
    case "thirteen":
      result = 13;
      break;
    case "fourteen":
      result = 14;
      break;
    case "fifteen":
      result = 15;
      break;
    case "sixteen":
      result = 16;
      break;
    case "seventeen":
      result = 17;
      break;
    case "eighteen":
      result = 18;
      break;
    case "nineteen":
      result = 19;
      break;
  }
  return result;
}

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
  // eliminating any " and" and "-"
  string
    .replace(/ and/gi, "")
    .replace(/-/gi, " ")
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
      } else if (str.split("").pop() === "y" && str.split(" ").length === 1) {
        result.push(ToNumberTwentyToNinety(str));
      } else {
        result.push(ToNumberOneToNineteen(str));
      }
    });
  return result.reduce((a, b) => a + b);
}
