function hasTargetSum(array, target) {

  // Iterate over each number in the array
  for (let i = 0; i < array.length; i++) {

    // Iterate over each subsequent number in the array
    for (let j = i + 1; j < array.length; j++) {

      // If the sum of the current pair of numbers equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  // If no pair of numbers adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) - Quadratic time complexity due to nested loops
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    For each number k in the array:
        For each number q in the array starting from index k+1:
            If k + q equals target:
                Return true
    Return false

*/

/*
  Add written explanation of your solution here
  This function iterates over each element in the array and, for each element, 
  it checks if there is another element in the array that, when added to the current 
  element, equals the target sum. 
  If such a pair is found, the function returns true. 
  If no such pair is found after iterating through all possible combinations, 
  the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
