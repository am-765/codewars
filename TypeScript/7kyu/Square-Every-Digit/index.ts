export class Kata {
  static squareDigits(num: number) {
    return Number(
      `${num}`
        .split("")
        .map((el) => Number(el) ** 2)
        .join("")
    );
  }
}
