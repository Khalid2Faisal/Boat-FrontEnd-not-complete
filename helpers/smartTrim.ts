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
