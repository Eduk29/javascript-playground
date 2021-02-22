export const slicePrototype = (arrayInput, beginPosition, endPosition) => {
  if (!arrayInput) {
    return [];
  }

  return arrayInput.slice(beginPosition, endPosition);
};
