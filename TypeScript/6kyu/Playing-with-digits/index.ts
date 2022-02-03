export class G964 {
  public static digPow = (n: number, p: number) => {
    const x =
      [...`${n}`].map(Number).reduce((pv, cv, id) => pv + cv ** (p + id), 0) /
      n;
    return x % 1 ? -1 : x;
  };
}
