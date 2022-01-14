const sumTwoSmallestNumbers = (numbers) => {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
};
