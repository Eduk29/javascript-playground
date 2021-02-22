export const splicePrototype = (
  arrayInput,
  indexToDelete,
  deleteCount,
  itemsToAdd
) => {
  if (!arrayInput || !indexToDelete || !deleteCount) {
    return [];
  }

  return arrayInput.splice(indexToDelete, deleteCount, itemsToAdd);
};
