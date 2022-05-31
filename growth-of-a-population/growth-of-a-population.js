// Kata resuelto el 09/12/2021

function nbYear(p0, percent, aug, p) {
  let habitants = p0 * 1;
  let years = 0;
  // doing the sum of habitants per year and adding a year per cycle
  do {
    habitants += habitants * (percent / 100) + aug;
    years++;
  } while (habitants < p);
  return years;
}
