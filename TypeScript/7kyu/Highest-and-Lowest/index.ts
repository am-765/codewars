export class Kata {
  static highAndLow(numbers: string) {
    let arr = numbers.split(" ").map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
  }
}
