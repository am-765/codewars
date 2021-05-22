export class Kata {
  static getCount(str: string) {
    return str.replace(/[^aiueo]/gi, "").length;
  }
}
