
export const sum = (num) => {
  return num + num;
};

export const factorial = (n) => {
  if(n < 0 || n===1){
    return 1;
  } else {
    return factorial(n-1) * n;
  }
};
