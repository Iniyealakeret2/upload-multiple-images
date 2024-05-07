"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSums = void 0;
// OPTIMIZED SOLUTION
const twoSums = (numbers, target) => {
    //check if numbers array is less than 2
    if (numbers.length < 2)
        return [];
    // Create a map to store the index of each number in the array Map<key, vale>
    const targetNumbers = new Map();
    for (let index = 0; index < numbers.length; index++) {
        // Calculate the difference needed to reach the target
        const complement = target - numbers[index];
        // If the complement exists in the map, return its index along with the current index
        if (targetNumbers.has(complement)) {
            return [targetNumbers.get(complement), index];
        }
        // Otherwise, store the current number and its index in the map
        targetNumbers.set(numbers[index], index);
    }
    // If no solution is found, return an empty array
    return [];
};
exports.twoSums = twoSums;
/**
 *
 * Explanation:

    1. We define a function twoSum which takes in an array of numbers targetNumbers and a target number target
     and returns an array of indices of the two numbers that add up to the target.

    2. Inside the function, we create a Map called targetNumbers to store the index of each number in the array.

    3. We iterate through the array targetNumbers using a for loop.

    4. For each number targetNumbers[index] in the array, we calculate the complement which is the difference
     between the target and the current number (target - targetNumbers[index]).

    5. We check if the complement exists in the targetNumbers. If it does, it means we have found the pair of
     numbers whose sum is equal to the target. In this case, we return an array containing the indices of
     the current number and the complement's index.

    6. If the complement doesn't exist in the targetNumbers, we store the current number and its index
     in the targetNumbers.

    7. If no solution is found after iterating through the entire array, we return an empty array.

    8. We test the function with some example cases and log the results to the console.
 *
 */
/**
     *  TIME AND SPACE COMPLEXITY
     *
     *
     * Time Complexity:
        Iteration through Array: We iterate through the nums array once. This takes O(n) time, where n is the length of the array.

        Map Operations: Inside the loop, we perform operations on the Map such as has, get, and set. Each of these operations
        takes constant time (O(1)) on average.

        Overall, the time complexity of the solution is dominated by the single loop iteration, making the time complexity O(n),
        where n is the length of the nums array.
    
    Space Complexity:
        Map: We use a Map data structure to store the numbers and their indices. The space required to s
        tore the Map grows with the number of distinct elements in the nums array. In the worst case,
        where all elements in the array are distinct, the space complexity would be O(n), where n is the length of the nums array.

        Additional Space: Apart from the Map, the solution uses a few additional variables, such as complement,
        which require constant space. Therefore, they don't significantly affect the overall space complexity.
     */
// PLEASE NOTE THIS
/***
 * Before going for the advanced solution always go for explain the nested forLoop solution first
 */
function twoSum(nums, target) {
    // Iterate through each pair of numbers in the array
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of nums[i] and nums[j] equals the target
            if (nums[i] + nums[j] === target) {
                // Return the indices of the two numbers that add up to the target
                return [i, j];
            }
        }
    }
    // If no solution is found, return an empty array
    return [];
}
