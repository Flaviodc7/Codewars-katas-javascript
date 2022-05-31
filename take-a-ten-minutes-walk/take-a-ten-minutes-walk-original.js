// Kata resuelto el 08/12/2021

function isValidWalk(walk) {
  if (walk.length != 10) return false;
  let west = 0,
    east = 0,
    north = 0,
    south = 0;
  walk.map((a) => {
    switch (a) {
      case "w":
        west++;
        break;
      case "e":
        east++;
        break;
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
    }
  });
  console.log(east, west, south, north);
  return east == west && south == north ? true : false;
}
