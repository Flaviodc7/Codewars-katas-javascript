// Kata resuelto el 10/12/2021

var countBits = function (n) {
  // converting to binary, cleaning the zeros, joining and returning the total of ones
  return n.toString(2).split("0").join("").length;
};
