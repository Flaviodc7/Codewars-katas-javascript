function arrayDiff(a, b) {
  let result = [];
  let found = false;
  // if any of the arrays where empty return a
  if (a.length === 0 || b.length === 0) {
    return a;
  } else {
    // Looking for a match
    a.map((aArray) => {
      b.map((bArray) => {
        if (aArray === bArray) return (found = true);
      });
      // Inserting element if not found or returning "found" to false
      found === false ? result.push(aArray) : (found = false);
    });
  }
  return result;
}
arrayDiff([1, 2, 2, 2, 3], [1, 4]);
