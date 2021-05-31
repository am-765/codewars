const persistence = (num) =>
  `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((ac, cv) => ac * cv))
    : 0;
