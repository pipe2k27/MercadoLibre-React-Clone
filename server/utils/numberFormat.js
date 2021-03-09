export const wholeNumber = (x) => {
  return Math.floor(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const decimals = (x) => {
  const num = x.toString();
  if (num.includes('.')) {
    return num.split('.').pop();
  }
  return null;
};
