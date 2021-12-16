interface String {
  toJadenCase(): string;
}

String.prototype.toJadenCase = function (): string {
  return this.replace(/(^|\s)[a-z]/g, (x: string) => x.toUpperCase());
};
