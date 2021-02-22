export const findPrototype = (arrayInput, testCondition) => {
  if (!arrayInput || arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.find(testCondition);
};
