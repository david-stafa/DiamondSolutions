export const numberWithDecimals = (number: number) => {
  const numLength = number.toString().length;

  // Add spece(s) to a number for better readibility -> 11111 = 11 111

  if (numLength <= 3) {
    return number;
  } else if (numLength == 4) {
    const array = number.toString().split("");
    array[0] += " ";
    return array.join("");
  } else if (numLength == 5) {
    const array = number.toString().split("");
    array[1] += " ";
    return array.join("");
  } else if (numLength == 6) {
    const array = number.toString().split("");
    array[2] += " ";
    return array.join("");
  } else if (numLength == 7) {
    const array = number.toString().split("");
    array[0] += " ";
    array[3] += " ";
    return array.join("");
  } else if (numLength == 8) {
    const array = number.toString().split("");
    array[1] += " ";
    array[4] += " ";
    return array.join("");
  } else if (numLength == 9) {
    const array = number.toString().split("");
    array[2] += " ";
    array[5] += " ";
    return array.join("");
  }
};
