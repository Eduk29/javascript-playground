export const somePrototype = (arrayInput, testFunction) => {
  if (!arrayInput || !testFunction) {
    return [];
  }

  return arrayInput.some(testFunction);
};
