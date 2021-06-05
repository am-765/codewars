const squareDigits = (num) =>
  Number(
    `${num}`
      .split("")
      .map((el) => el ** 2)
      .join("")
  );
