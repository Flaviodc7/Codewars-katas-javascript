// Kata finalizado el 29/05/2022

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
      result += 7;
      break;
    case "eight":
      result += 8;
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
      result += 12;
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
  let result = 0;
  // exceptional case of one million
  if (string === "one million") {
    return 1000000;
  }
  // exceptional case of zero
  if (string === "zero") {
    return 0;
  }
  if (string.split(" ").pop() === "thousand")
    string = string.replace("thousand", "thousand ");
  string
    .replace(/ and/gi, "")
    .split(" thousand ")
    .map((str, arrN) => {
      // return nothing if there's no units just thousands
      if (str === "") return;
      // if for case of only hundreds
      if (str.split("").pop() === "d" && str.split(" ").pop() === "hundred") {
        // ternary of case of hundreds of thousands or hundreds
        return string.split(" thousand ").length === 2 && arrN === 0
          ? (result += ToNumberOneToNineteen(str.split(" ").shift()) * 100000)
          : (result += ToNumberOneToNineteen(str.split(" ").shift()) * 100);
      }
      // if for case of only tens (20, 30, 40+)
      if (str.split("").pop() === "y" && str.split(" ").length === 1) {
        // if to add a zero in case of thousands
        return string.split(" thousand ").length === 2 && arrN === 0
          ? (result += ToNumberTwentyToNinety(str) * 1000)
          : (result += ToNumberTwentyToNinety(str));
      }
      str = str.split(" hundred ");
      // separating hundreds, tens and units
      if (str.length !== 1) {
        result += ToNumberOneToNineteen(str[0].split(" ").shift()) * 100;
        str[1] = str[1].split("-");
        if (str[1].length !== 1 || str[1][0].split("").pop() === "y") {
          result +=
            ToNumberTwentyToNinety(str[1].shift()) +
            ToNumberOneToNineteen(str[1].pop());
        } else result += ToNumberOneToNineteen(str[1].shift());
        return string.split(" thousand ").length === 2 && arrN === 0
          ? (result *= 1000)
          : result;
      } else {
        // in case there is no hundreds
        str = str.join("").split("-");
        if (str.length !== 1) {
          return string.split(" thousand ").length === 2 && arrN === 0
            ? (result +=
                (ToNumberTwentyToNinety(str.shift()) +
                  ToNumberOneToNineteen(str.pop())) *
                1000)
            : (result +=
                ToNumberTwentyToNinety(str.shift()) +
                ToNumberOneToNineteen(str.pop()));
        } else {
          // if less than 20
          return string.split(" thousand ").length === 2 && arrN === 0
            ? (result += ToNumberOneToNineteen(str.pop()) * 1000)
            : (result += ToNumberOneToNineteen(str.pop()));
        }
      }
    });
  return result;
}

parseInt("seven hundred and eighty-nine thousand one");
