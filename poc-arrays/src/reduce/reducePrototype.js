export const reducePrototype = (arrayInput, reducerFunction) => {
  if (!arrayInput || !reducerFunction || !reducePrototype) {
    return [];
  }

  return arrayInput.reduce(reducerFunction);
};
