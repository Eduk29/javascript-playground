export const mapPrototype = (arrayInput) => {
  if (arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.map((value, index, array) => {
    return value * 2;
  });
};
