const isNumber = (n) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};

export default isNumber;
