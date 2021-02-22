export const findIndexPrototype = (arrayInput, testCondition) => {
  if (!arrayInput || arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.findIndex(testCondition);
};
