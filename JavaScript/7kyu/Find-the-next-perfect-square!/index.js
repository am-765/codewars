const findNextSquare = (sq) => {
  const x = Math.sqrt(sq);
  return x % 1 ? -1 : (x + 1) ** 2;
};
