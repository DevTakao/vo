export const prefixWithZeroes = (number, digitCount) => {
  const numberString = number.toString();
  const zeroCount = digitCount - numberString.length;

  if (zeroCount <= 0) {
    return numberString;
  }

  const zeroString = "0".repeat(zeroCount);
  return zeroString + numberString;
};
