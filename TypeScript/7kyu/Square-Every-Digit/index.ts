export class Kata {
  static squareDigits(num: number) {
    return +num
      .toString()
      .split("")
      .map((el) => (+el) ** 2)
      .join("");
  }
}
