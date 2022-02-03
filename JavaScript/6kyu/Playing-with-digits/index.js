const digPow = (n, p) => {
  const x = [...`${n}`].reduce((pv, cv, id) => pv + cv ** (p + id), 0) / n;
  return x % 1 ? -1 : x;
};
