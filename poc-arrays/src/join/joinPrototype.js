export const joinPrototype = (arrayBase, separator) => {
  if (!arrayBase || !separator) {
    return [];
  }

  return arrayBase.join(separator);
};
