export class G964 {
  public static nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
  ) => {
    let count = 0;
    while (p0 < p) {
      p0 += p0 * (percent / 100) + aug;
      count++;
    }
    return count;
  };
}
