export class G964 {
  public static printerError(s: string): string {
    return `${s.replace(/[a-m]/g, "").length}/${s.length}`;
  }
}
