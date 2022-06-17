function hasTargetSum(array, target) {
  // Write your algorithm here

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
  1. create a variable called target and set it to the target parameter
  2. create a variable called i and set it to 0
  3. create a variable called complement and set it to target - array[i]
  4. create a variable called j and set it to i + 1
  5. create a variable called found and set it to false
  6. while i is less than array.length and found is false
    7. while j is less than array.length and found is false
      8. if array[j] === complement
        9. set found to true
      10. increment j 
    11. increment i
  12. return found
*/

/*
  Add written explanation of your solution here
  Explanation:
  1. We create a variable called target and set it to the target parameter.
  2. We create a variable called i and set it to 0.
  3. We create a variable called complement and set it to target - array[i].
  4. We create a variable called j and set it to i + 1.
  5. We create a variable called found and set it to false.
  6. While i is less than array.length and found is false, we do the following:
    7. While j is less than array.length and found is false, we do the following:
      8. If array[j] === complement, we set found to true.
      9. Increment j. 
    10. Increment i.
  11. Return found.
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
