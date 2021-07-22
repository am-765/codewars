const alphabetPosition = (text) =>
  [...text.toUpperCase().replace(/[^A-Z]/g, "")]
    .map((el) => el.charCodeAt() - 64)
    .join(" ");
