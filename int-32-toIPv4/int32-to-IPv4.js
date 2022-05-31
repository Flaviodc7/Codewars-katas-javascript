// Kata resuelto el 16/12/2021

function int32ToIp(int32) {
    // Convirtiendo la entrada integer a binario y asignandolo a una cadena
  let binary = ("00000000000000000000000000000000" + int32.toString(2)).slice(
    int32.toString(2).length
  );
    // Retornando IP convirtiendo cada 8 digitos a entero
  return `${parseInt(binary.slice(0, 8), 2)}.${parseInt(
    binary.slice(9, 16),
    2
  )}.${parseInt(binary.slice(17, 24), 2)}.${parseInt(binary.slice(25, 32), 2)}`;
}
