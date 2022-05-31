// Kata modificado el 31/05/2022

function isValidWalk(walk) {
  // if the walk takes more than 10 minutes returning false (1 minute per street)
  if (walk.length !== 10) return false;
  let x = 0,
    y = 0;
  // adding or substracting depending on direction
  walk.map((direction) => {
    switch (direction) {
      case "w":
        x--;
        break;
      case "e":
        x++;
        break;
      case "s":
        y--;
        break;
      case "n":
        y++;
        break;
    }
  });
  // if both directions are equal to zero, it's true
  return x === 0 && y === 0 ? true : false;
}
