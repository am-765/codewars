const sum = (arr: number[]) => arr.reduce((pv, cv) => pv + cv, 0);

export const findEvenIndex = (arr: number[]): number =>
  arr.findIndex((_, i) => {
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1);
    return sum(left) === sum(right);
  });

console.log(
  findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
  3,
  "The array was: [1,2,3,4,3,2,1] \n"
);
console.log(
  findEvenIndex([1, 100, 50, -51, 1, 1]),
  1,
  "The array was: [1,100,50,-51,1,1] \n"
);
console.log(
  findEvenIndex([1, 2, 3, 4, 5, 6]),
  -1,
  "The array was: [1,2,3,4,5,6] \n"
);
console.log(
  findEvenIndex([20, 10, 30, 10, 10, 15, 35]),
  3,
  "The array was: [20,10,30,10,10,15,35] \n"
);
