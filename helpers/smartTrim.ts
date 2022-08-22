/**
 * It takes a string, a length, a delimiter, and an appendix, and returns a string that is the original
 * string trimmed to the length, with the appendix appended if the string was trimmed
 * @param {string} str - The string to trim
 * @param {number} length - The maximum length of the string.
 * @param {string} delim - The delimiter to use to separate the string.
 * @param {string} appendix - The string to append to the end of the truncated string.
 * @returns A function that takes 4 parameters.
 */
const smartTrim = (
  str: string,
  length: number,
  delim: string,
  appendix: string
) => {
  if (str.length <= length) return str;

  let trimmedStr = str.substr(0, length + delim.length);

  let lastDelimIndex = trimmedStr.lastIndexOf(delim);
  if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
};

export default smartTrim;
