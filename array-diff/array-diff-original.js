function arrayDiff(a, b) {
    let result = [];
    let cont = 0;
    if (a.length == 0) {
      result = [...a];
    } else if (b.length == 0) {
      result = [...a];
    } else {
      a.map((aArray) => {
        b.map((bArray) => {
          aArray == bArray && cont++;
        });
        cont == 0 && result.push(aArray);
        cont = 0;
      });
    }
    return result;
  }