const sumTwoSmallestNumbers = (numbers) => {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((ac, cv) => ac + cv);
};
