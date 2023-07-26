function numberChecker(numbersArray) {
    return function(numberToCheck) {
      return numbersArray.includes(numberToCheck);
    };
  }
  
  // Test the numberChecker function
  const numbersArray = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbersArray);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  