export const isIsogram = (str: string) => !/(.)(.*\1)/i.test(str);
