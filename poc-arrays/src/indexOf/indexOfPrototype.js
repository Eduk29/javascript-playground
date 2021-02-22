export const indexOfPrototype = (arrayInput, testCondition) => {
  if (!arrayInput || arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.indexOf(testCondition);
};
