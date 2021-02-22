export const unshiftPrototype = (arrayInput, itemsToAdd) => {
  if (!arrayInput || !itemsToAdd) {
    return [];
  }

  return arrayInput.unshift(itemsToAdd);
};
