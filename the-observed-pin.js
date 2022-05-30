// Kata resuelto el 15/12/2021

function getPINs(observed) {
    let possible = [];
    let result = [];
    // Asignando casos a cada número
    observed.split("").map((a) => {
      switch (a) {
        case "0":
          possible.push(["0", "8"]);
          break;
        case "1":
          possible.push(["1", "2", "4"]);
          break;
        case "2":
          possible.push(["1", "2", "3", "5"]);
          break;
        case "3":
          possible.push(["2", "3", "6"]);
          break;
        case "4":
          possible.push(["1", "4", "5", "7"]);
          break;
        case "5":
          possible.push(["2", "4", "5", "6", "8"]);
          break;
        case "6":
          possible.push(["3", "5", "6", "9"]);
          break;
        case "7":
          possible.push(["4", "7", "8"]);
          break;
        case "8":
          possible.push(["0", "5", "7", "8", "9"]);
          break;
        case "9":
          possible.push(["6", "8", "9"]);
          break;
      }
    });
    // Buscando la combinación
    if (possible.length === 1) return possible[0];
    else {
      possible[0].map((a) => {
        possible[1].map((b) => {
          if (possible.length === 2) result.push(a + b);
          else {
            possible[2].map((c) => {
              if (possible.length === 3) result.push(a + b + c);
              else {
                possible[3].map((d) => {
                  if (possible.length === 4) result.push(a + b + c + d);
                  else {
                    possible[4].map((e) => {
                      if (possible.length === 5) result.push(a + b + c + d + e);
                      else {
                        possible[5].map((f) => {
                          if (possible.length === 6)
                            result.push(a + b + c + d + e + f);
                          else {
                            possible[6].map((g) => {
                              if (possible.length === 7)
                                result.push(a + b + c + d + e + f + g);
                              else {
                                possible[7].map((h) =>
                                  result.push(a + b + c + d + e + f + g + h)
                                );
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      });
    }
    return result;
  }