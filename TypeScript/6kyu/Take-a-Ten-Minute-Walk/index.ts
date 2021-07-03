export const isValidWalk = (walk: string[]) => {
  const count = (val: string) => walk.filter((el) => el === val).length;
  return (
    walk.length === 10 && count("n") === count("s") && count("e") === count("w")
  );
};
