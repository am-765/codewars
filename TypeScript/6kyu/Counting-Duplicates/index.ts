export const duplicateCount = (text: string): number =>
  (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g) || []
  ).length;
