export class G964 {
  public static longest = (s1: string, s2: string) => {
    return [...new Set(s1 + s2)].sort().join("");
  };
}
