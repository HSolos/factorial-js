function factorial(num){
  let result = num;
  while(num > 1){
    result = result * ( num - 1); 
    num--;
  }
  return result;
}
console.log(factorial(7));