// Kata resuelto el 16/12/2021

function isPrime(num) {
  // Descartando que sea par, que finalice en 5, que sea mayor a 0 o que sea el 1
  if (
    (num % 2 == 0 && num !== 2) ||
    (num.toString().split("").pop() === "5" && num.toString().length > 1) ||
    num < 0 ||
    num === 1
  )
    return false;
  // Realizando la búsqueda pasando por 3, 5, 7, 9, 11... hasta llegar a la raíz cuadrada del número ingresado
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
