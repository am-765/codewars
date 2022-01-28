const uniqueInOrder = (iterable) =>
  [...iterable].filter((v, i, a) => v !== a[i - 1]);
