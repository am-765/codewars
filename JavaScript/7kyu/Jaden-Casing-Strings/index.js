String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, (x) => x.toUpperCase());
};
