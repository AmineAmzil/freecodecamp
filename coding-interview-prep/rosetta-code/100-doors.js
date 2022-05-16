function getFinalOpenedDoors(numDoors) {
  const doors = [];
  let i = 1;
  while (i <= numDoors) {
    if (getDividers(i).length % 2 !== 0) {
      doors.push(i);
    }
    i++;
  }
  return doors;
}

function getDividers(number) {
  if (number === 1) return [1];
  if (number === 0) return [0];
  const dividers = [];
  let i = 1;
  while (i <= number) {
    if (number % i === 0) dividers.push(i);
    i++;
  }
  return dividers;
}
