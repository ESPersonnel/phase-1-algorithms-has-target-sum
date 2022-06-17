function hasTargetSum(array, target) {
  // Write your algorithm here
  // hasTargetSum
  // 1) returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10
  // 2) returns true when the array is [22, 19, 4, 6, 30] and the target is 25
  // 3) returns false when the array is [1, 2, 5] and the target is 4
  // 4) returns true when the array is [-7, 10, 4, 8] and the target is 3
  // 5) returns true when the array is [1, 2, 3, 4] and the target is 5
  // 6) returns true when the array is [2, 2, 3, 3] and the target is 4
  // ✓ returns false when the array is [4] and the target is 4

for (var i = 0; i < array.length; i++) {
  const complement = target - array[i];
  for(let j = i + 1; j < array.length; j++) {
    if (array[j] === complement) {
      return true;
    }
  }
}
return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O: O(n)
  Big O space complexity: O(1)
*/

/* 
  Add your pseudocode here
  Psuedocode:
  1) create a variable called sum and set it to 0
  2) create a variable called i and set it to 0
  3) create a variable called j and set it to the length of the array - 1
  4) while i is less than j
    a) create a variable called sum and set it to the sum of the array[i] and array[j]
    b) if sum is equal to the target
      i) return true
    c) if sum is less than the target
      i) increment i
    d) if sum is greater than the target
      i) decrement j
  5) return false
*/

/*
  Add written explanation of your solution here
  Explanation:
  1) We start by creating a variable called sum and setting it to 0.
  2) We then create a variable called i and setting it to 0.
  3) We then create a variable called j and setting it to the length of the array - 1.
  4) We then create a while loop that will run as long as i is less than j.
  5) We then create a variable called sum and setting it to the sum of the array[i] and array[j].
  6) We then check if sum is equal to the target.
  7) If sum is equal to the target, we return true.
  8) If sum is less than the target, we increment i.
  9) If sum is greater than the target, we decrement j.
  10) We then return false.
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
