const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
const DNAStrand = (dna) => dna.replace(/./g, (s) => pairs[s]);
