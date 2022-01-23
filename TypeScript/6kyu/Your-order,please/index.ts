export function order(words: string) {
  const wordArray = words.split(" ");
  let resultArray: string[] = [];
  for (let i = 1; i <= wordArray.length; i++) {
    wordArray.map((cv) =>
      cv.indexOf(i.toString()) >= 0 ? resultArray.push(cv) : ""
    );
  }
  return resultArray.join(" ");
}
