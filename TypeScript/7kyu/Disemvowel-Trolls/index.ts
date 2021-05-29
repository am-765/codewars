export class Kata {
  static disemvowel(str: string) {
    return str.replace(/[aiueo]/gi, "");
  }
}
