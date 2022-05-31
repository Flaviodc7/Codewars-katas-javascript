// Kata modificado el 31/05/2022

function intToHex(a) {
    // switch from 10 to 15
    switch (a) {
      case 10:
        a = "A";
        break;
      case 11:
        a = "B";
        break;
      case 12:
        a = "C";
        break;
      case 13:
        a = "D";
        break;
      case 14:
        a = "E";
        break;
      case 15:
        a = "F";
        break;
    }
    return a;
  }
  
  function rgb(r, g, b) {
    result = [r, g, b];
    let final = result.map((a) => {
      // case of number less than 0
      if (a < 0) {
        return `00`;
      }
      // if for less than 10
      if (a < 10) {
        return `0${a}`;
      } else if (a > 255) {
        //  normalizing if more than 255, but not returning
        a = 255;
      }
      // The actual conversion from rgb to hex
      if (a > 15) {
        // Up to 15
        let quot = intToHex(Math.floor(a / 16));
        let rem = intToHex(a % 16);
        return `${quot}${rem}`;
      } else {
        // case for between 10 and 15
        a = intToHex(a);
        return `0${a}`;
      }
    });
    return final.join("");
  }