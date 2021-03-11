/**
 * @function wholeNumber this function extracts and returns the whole part of a number
 *
 * @param {number} x number you whish to format
 * @returns {string} the whole part of the number as a string
 */

export const wholeNumber = (x) => {
  return Math.floor(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

/**
 * @function decimals this function extracts and returns the decimal part of a number
 *
 * @param {number} x number you whish to format
 * @returns {string} the decimal part of the number as a string
 */

//
export const decimals = (x) => {
  const num = x.toString();
  if (num.includes('.')) {
    return num.split('.').pop();
  }
  return null;
};
