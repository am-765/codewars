type PairsObj = {
  A: string;
  T: string;
  C: string;
  G: string;
  [key: string]: string;
};

const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
} as PairsObj;

export class Kata {
  static dnaStrand(dna: string) {
    return dna.replace(/./g, (s) => pairs[s]);
  }
}
