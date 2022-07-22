// function to check if dividing the number of posts by the limit is a whole number
export const ifWholeNumber = (size: number, limit: number) => {
  return size % limit === 0;
};
