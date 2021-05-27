export class Kata {
  static spinWords(words: string) {
    return words
      .split(" ")
      .map((el) => (el.length < 5 ? el : el.split("").reverse().join("")))
      .join(" ");
  }
}
