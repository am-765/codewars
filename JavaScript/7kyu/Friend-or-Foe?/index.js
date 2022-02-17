const friend = (friends) =>
  friends.filter((v) => v.match(/[a-z]+/gi) && v.length === 4);
