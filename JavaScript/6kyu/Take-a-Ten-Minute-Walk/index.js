const isValidWalk = (walk) => {
  const count = (val) => walk.filter((el) => el === val).length;
  return (
    walk.length === 10 && count("n") === count("s") && count("e") === count("w")
  );
};
