const toCamelCase = (str) =>
  str.replace(/[-_]\w/g, (s) => s.charAt(1).toUpperCase());
