const likes = (names) => {
  const LIKE_THIS = "like this";
  const LIKES_THIS = "likes this";
  const len = names.length;
  switch (len) {
    case 0:
      return `no one ${LIKES_THIS}`;
      break;

    case 1:
      return `${names[0]} ${LIKES_THIS}`;

    case 2:
      return `${names[0]} and ${names[1]} ${LIKE_THIS}`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} ${LIKE_THIS}`;

    default:
      return `${names[0]}, ${names[1]} and ${len - 2} others ${LIKE_THIS}`;
      break;
  }
};
